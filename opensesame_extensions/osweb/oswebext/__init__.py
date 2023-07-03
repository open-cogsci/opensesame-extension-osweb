"""Create online experiments"""

icon = "preferences-desktop"
label = "OSWeb and JATOS control panel"
settings = {
  "oswebext_include_context": True,
  "oswebext_intro_click": True,
  "oswebext_fullscreen": False,
  "oswebext_bypass_linter": False,
  "oswebext_subject_nrs": "0,1",
  "oswebext_welcome_text": "",
  "oswebext_external_js": "",
  "oswebext_jatos_url": "https://jatos.mindprobe.eu",
  "oswebext_jatos_api_token": ""
}
menu = {
  "index": -1,
  "separator_after": False,
  "separator_before": False,
  "submenu": "Tools"
}
