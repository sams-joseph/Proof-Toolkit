function Proof(fileList, jobNames, options) {
  this.fileList = fileList;
  this.jobNames = jobNames;
  this.options = options;

  this.displayFiles = function() {
    for ( var i = 0; i < fileList.length; i ++ ) {
      options.add('statictext', [15,20+(i*21),570,35+(i*21)], fileList[i].toString().substring(folderLength) );
      jobNames.add('edittext', [15,20+(i*20),100,35+(i*20)], '123456P0' + (i + 1));
    }
  };

  this.rename = function() {
    for ( var i = 0; i < fileList.length; i ++ ) {
      fileList[i].rename(jobNames.children[i].text + '.pdf');
    }
    alert('Rename Complete');
  };

  this.openFiles = function() {
    for ( var i = 0; i < fileList.length; i ++ ) {
      var tempFile = File(fileList[i].toString().substring(0,folderLength) + jobNames.children[i].text + '.pdf');
      openPDF(tempFile);
      app.activeDocument.flatten();
    }
    alert('Open Files Complete');
  };

  function openPDF(fileOpen){
    var cropTo = CropToType.CROPBOX,
        openPDFOpts = new PDFOpenOptions;
  			openPDFOpts.resolution = 300;
        openPDFOpts.cropPage = cropTo;

    app.open(fileOpen, openPDFOpts);
  }
}
