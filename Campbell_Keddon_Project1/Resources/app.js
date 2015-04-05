Ti.UI.setBackgroundColor("#fff");

var mainWindow = Ti.UI.createWindow({
	backgroundColor : "#6dd1f7"
});

var foodDisplayView = Ti.UI.createView({
	backgroundColor: "#dbffe4",
	borderRadius: 2,
	borderWidth: 1,
	borderColor: "#fff",
	width: "80%",
	height: "50%",
	top: 20
	
});

var nextButton = Ti.UI.createView({
	backgroundColor: "#ffc88c",
	top: 300,
	width: "20%",
	height: "10%",
	right: 40
});

var previousButton = Ti.UI.createView({
	backgroundColor: "#a48cff",
	top: 300,
	width: "20%",
	height: "10%",
	left: 40
});

var textLablenext = Ti.UI.createLabel({
	text: "Next",
	color: "#fff",
	font: (fontSize= 14, fontFamily= "trebuchetMS")
});

var textLableprevious = Ti.UI.createLabel({
	text: "Previous",
	color: "#fff",
	font: (fontSize= 14, fontFamily= "trebuchetMS")
});

var loadFrits = require("appFunctions");

mainWindow.add(foodDisplayView, nextButton, previousButton);
nextButton.add(textLablenext);
previousButton.add(textLableprevious);
mainWindow.open();
