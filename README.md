# Proof-Toolkit
Adobe Extendscript to rename files from a folder and rasterize them at a given PPI
## Function
This script points to a folder on your machine and reads all of the files in that folder.
It provides you with a list of those files and an edit text field next to each file name.


![screen shot 2016-09-27 at 9 51 07 am](https://cloud.githubusercontent.com/assets/17747926/18876510/03f8feb4-8498-11e6-9776-27d4022ccc28.png)


You can use that text field to input a new file name.
When you click the run button all of the files will be renamed to the corresponding file name 
and be rasterized at the CropBox at 300ppi.
## Features
There is a settings button on the main window that contains the location to the folder you will rename files from.
You also can set your username which I am planning on using in future features.


![screen shot 2016-09-27 at 9 51 19 am](https://cloud.githubusercontent.com/assets/17747926/18876518/06b122d0-8498-11e6-8fa5-51ed661fc3e2.png)


These settings are stored in a config.json file and can be written to via the settings window.
## BUGS and Known Issues
 - Right now the folder does not update without re-running the script.
 - Have not tested on windows.
