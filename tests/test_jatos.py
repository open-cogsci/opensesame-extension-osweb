import os
import pytest
from pathlib import Path
from libopensesame.oslogging import oslogger
from libopensesame.experiment import Experiment
from osweb import version_info, sync, convert
from osweb.oswebexceptions import VersionConflict


def test_as_jatos_exp():
    exp = convert.as_jatos_exp('test-data/gaze-cuing.osexp')
    assert isinstance(exp, Experiment)
    assert exp.var.has('jatos_uuid')
    exp = convert.as_jatos_exp(Path('test-data/gaze-cuing.osexp'))
    assert isinstance(exp, Experiment)
    assert exp.var.has('jatos_uuid')
    assert isinstance(exp, Experiment)
    exp = convert.as_jatos_exp(exp)
    assert exp.var.has('jatos_uuid')
    
    
def test_version_info():
    # We first test non-conflicting changes by opening a file, removing,
    # changing, and adding some files to the file pool, and then validating
    # the version info
    exp = convert.as_jatos_exp('test-data/gaze-cuing.osexp')
    pool = Path(exp.pool.folder())
    convert.exp_to_jzip(exp, jatos_info=jatos_info)
    vi0 = version_info.extract_version_info(exp)
    (pool / 'left.png').unlink()
    (pool / 'right.png').write_text('modified')
    (pool / 'new.txt').write_text('new')
    convert.exp_to_jzip(exp, jatos_info=jatos_info)
    vi1 = version_info.extract_version_info(exp)
    vc = version_info.compare_version_info(jatos_info, vi0, vi1)
    print(vc)
    assert vc.modified == {'pool/right.png'}
    assert vc.conflicting == set()
    assert 'pool/new.txt' in vc.added
    assert 'pool/left.png' in vc.deleted
    # We then test conflicting changes by opening the same experiment twice,
    # and each time making a the same new file with different content.
    exp = convert.as_jatos_exp('test-data/gaze-cuing.osexp')
    pool = Path(exp.pool.folder())
    (pool / 'conflicting.txt').write_text('conflicting new A')
    (pool / 'right.png').write_text('conflicting existing A')
    convert.exp_to_jzip(exp, jatos_info=jatos_info)
    vi0 = version_info.extract_version_info(exp)
    exp = convert.as_jatos_exp('test-data/gaze-cuing.osexp')
    pool = Path(exp.pool.folder())
    (pool / 'conflicting.txt').write_text('conflicting new B')
    (pool / 'right.png').write_text('conflicting existing B')
    convert.exp_to_jzip(exp, jatos_info=jatos_info)
    vi1 = version_info.extract_version_info(exp)
    vc = version_info.compare_version_info(jatos_info, vi0, vi1)
    assert vc.modified == set()
    assert vc.conflicting == {'orig.osexp', 'pool/conflicting.txt',
                              'pool/right.png'}


def test_upload_conflict():
    # We first upload an experiment
    exp = convert.as_jatos_exp('test-data/gaze-cuing.osexp')
    exp.var.title = 'Conflict test'
    uuid = sync.upload(exp, jatos_info)
    # We download it make a change to it, and re-upload. This should be fine
    exp1 = convert.jzip_to_exp(sync.download_jzip(uuid, jatos_info))
    exp1.var.title = 'Changed title 1'
    sync.upload(exp1, jatos_info)
    # We download it and agian make a change to it
    exp2 = convert.jzip_to_exp(sync.download_jzip(uuid, jatos_info))
    exp2.var.title = 'Changed title 2'
    # We download it again as a separate experiment, and make a change to it
    # that conflicts with the change above
    exp3 = convert.jzip_to_exp(sync.download_jzip(uuid, jatos_info))
    exp3.var.title = 'Changed title 3'
    # Now we try to upload both changed experiments. The second upload should
    # give # a conflict
    sync.upload(exp2, jatos_info)
    with pytest.raises(VersionConflict):
        sync.upload(exp3, jatos_info)


def test_convert():
    if jatos_info.token is None:
        oslogger.warning('no API token provided, skipping test')
        return
    path = convert.exp_to_jzip('test-data/gaze-cuing.osexp',
                               jzip_path='tmp.jzip',
                               jatos_info=jatos_info)
    exp = convert.jzip_to_exp(path)
    path = convert.exp_to_html(exp, index_path='tmp.html')


def test_upload_download():
    def print_progress(transferred, total):
        print(f'{transferred} / {total}')
    
    if jatos_info.token is None:
        oslogger.warning('no API token provided, skipping test')
        return
    exp = convert.as_jatos_exp('test-data/gaze-cuing.osexp')
    sync.upload(exp, jatos_info, callback=print_progress)
    jzip_path = sync.download_jzip(exp.var.jatos_uuid, jatos_info,
                                   callback=print_progress)
    exp = convert.jzip_to_exp(jzip_path)
    path = convert.exp_to_html(exp, index_path='tmp.html')


jatos_info = sync.JatosInfo(os.environ.get('JATOS_URL', None),
                            os.environ.get('JATOS_API_TOKEN', None))
oslogger.start('osweb')
