function saveSettings(saveDestination) {
  var filepath = '~/Desktop/proof_toolbelt/settings/config.json',
      writeFile = File(filepath),
      out;

  if (!writeFile.exists) {
    writeFile = new File(filepath);
  } else {
    var res = confirm('The file already exists. Should I overwrite it', true, 'titleWINonly');
    if (res !== true) {
      return;
    }
  }

  if (writeFile !== '') {
    out = writeFile.open('w', undefined, undefined);
    writeFile.encoding = 'UTF-8';
    writeFile.lineFeed = 'Unix';
  }

  if (out !== false) {
    writeFile.writeln('{"username": "' + usernameField.text + '","saveLocation": "' + saveDestination + '"}');
    writeFile.close();
  }
}
