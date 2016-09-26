#target photoshop
#include "vendor/json2.js"
#include "lib/global_variables.jsx"
#include "lib/window_setup.jsx"
#include "classes/Proof.jsx"
#include "lib/save_settings.jsx"

var proof = new Proof(fileList, jobNames, options);

proof.displayFiles();

function runBtnListener() {
  w.close();
  proof.rename();
  proof.openFiles();
}

function settingsBtnListener() {
  settingsWindow.show();
}

function openFileDialogBtnListener() {
  saveDestination = Folder.selectDialog("Select Folder");
}

function saveSettingsBtnListener() {
  saveSettings(saveDestination);
  settingsWindow.close();
}

w.show();
