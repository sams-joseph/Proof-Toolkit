var w =new Window('dialog', 'Proof Toolkit', undefined),
    options = w.add('panel', [0,0,700,500], 'Available Proofs'),
    buttons = w.add('group'),
    runBTN = buttons.add('button', undefined, 'Enter'),
    jobNames = options.add('group', [580,0,700,500]),
    settingsBTN = buttons.add('button', undefined, 'Settings'),
    settingsWindow = new Window('dialog', 'Settings', undefined),
    settingsOptions = settingsWindow.add('group', [0, 0, 500, 300]),
    usernameField = settingsOptions.add('edittext', [15, 15, 150, 35], configJSON.username),
    saveFolderBTN = settingsOptions.add('button', [15, 40, 150, 60], 'Choose Folder'),
    settingsButtons = settingsWindow.add('group'),
    saveBTN = settingsButtons.add('button', undefined, 'Save');

    buttons.add('button', undefined, 'Cancel');
    settingsButtons.add('button', undefined, 'Cancel');
    settingsOptions.add('statictext', [165, 40, 400, 60], configJSON.saveLocation);

    runBTN.addEventListener('click', runBtnListener);
    settingsBTN.addEventListener('click', settingsBtnListener);
    saveBTN.addEventListener('click', saveSettingsBtnListener);
    saveFolderBTN.addEventListener('click', openFileDialogBtnListener);
