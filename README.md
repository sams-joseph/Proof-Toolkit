# Proof-Toolkit
Adobe Extendscript to rename files from a folder and rasterize them at a given PPI
## Function
This script points to a folder on your machine and reads all of the files in that folder.
It provides you with a list of those files and an edit text field next to each file name.
You can use that text field to input a new file name.
When you click the run button all of the files will be renamed to the corresponding file name 
and be rasterized at the CropBox at 300ppi.
## Features
There is a settings button on the main window that contains the location to the folder you will rename files from.
You also can set your username which I am planning on using in future features.
These settings are stored in a config.json file and can be written to via the settings window.
## BUGS and Known Issues
 - Right now the folder does not update without re-running the script.
 - Have not tested on windows.
