Ti.UI.setBackgroundColor("#fff");

var galleria = require("gallery");


var deviceWth = Ti.Platform.displayCaps.platformWith;
var deviceHgt = Ti.Platform.displayCaps.platformHeight;
var itemCount = 30;
var itemRow = 4;
var margin = 5;
var canvasWth = (10);
var itemsize = 68;
var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imagesFile = imagesFolder.getDirectoryListing();



