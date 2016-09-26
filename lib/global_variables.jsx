var fileToRead = File('~/Desktop/proof_toolbelt/settings/config.json'),
    configJSON = null,
    content;

if(fileToRead !== false){
  fileToRead.open('r');
  content = fileToRead.read();
  configJSON =  JSON.parse(content);
  fileToRead.close();
  } else {
  alert('Error reading config file');
}

var username = configJSON.username,
    desktop = '/Users/' + username + '/Desktop/',
    dropBox = configJSON.saveLocation,
    dropBoxFolder = new Folder(dropBox),
    dsStore = new File(dropBoxFolder + '/.DS_Store'),
    folderLength = configJSON.saveLocation.length + 1;

if(dsStore.exists) {
  dsStore.remove();
}

var fileList = dropBoxFolder.getFiles();
