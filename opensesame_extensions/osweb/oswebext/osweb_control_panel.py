# -*- coding:utf-8 -*-

"""
This file is part of OpenSesame.

OpenSesame is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

OpenSesame is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with OpenSesame.  If not, see <http://www.gnu.org/licenses/>.
"""
from libopensesame.py3compat import *
from libqtopensesame.widgets.base_widget import BaseWidget


class OSWebControlPanel(BaseWidget):
    """The OSWeb control panel combines the actions and settings that are also
    available elsewhere in the user interface.
    """
    def __init__(self, parent, settings_widget):
        super().__init__(parent, ui='extensions.oswebext.osweb_control_panel')
        self._settings_widget = settings_widget
        self.ui.layout_vbox.addWidget(settings_widget)
        self.ui.layout_vbox.addStretch()
        self.ui.button_export_html.clicked.connect(self._export_html)
        self.ui.button_export_jzip.clicked.connect(self._export_jzip)
        self.ui.button_import_jzip.clicked.connect(self._import_jzip)
        self.ui.button_open_jatos.clicked.connect(self._open_jatos)
        self.ui.button_publish_jatos.clicked.connect(self._publish_jatos)
        self.ui.button_convert_results.clicked.connect(self._convert_results)
        self.ui.button_experiment_properties.clicked.connect(
            self.tabwidget.open_general)
        self.refresh()
    
    def showEvent(self, event):
        self.refresh()
        
    def refresh(self):
        self._settings_widget.ui.edit_uuid.setText(
            self.experiment.var.get('jatos_uuid', ''))
        if self.experiment.var.canvas_backend == 'osweb':
            self.ui.button_experiment_properties.setVisible(False)
            self.ui.label_experiment_properties.setVisible(False)
        else:
            self.ui.button_experiment_properties.setVisible(True)
            self.ui.label_experiment_properties.setVisible(True)
            
    def set_jatos_configured(self, configured):
        self.ui.label_jatos_unconfigured.setVisible(not configured)

    def _export_html(self):
        self.extension_manager.fire('osweb_export_html')
        
    def _export_jzip(self):
        self.extension_manager.fire('osweb_export_jzip')
        
    def _import_jzip(self):
        self.extension_manager.fire('osweb_import_jzip')
        
    def _open_jatos(self):
        self.extension_manager.fire('osweb_open_jatos')
        
    def _publish_jatos(self):
        self.extension_manager.fire('osweb_publish_jatos')
        
    def _convert_results(self):
        self.extension_manager.fire('osweb_convert_results')
