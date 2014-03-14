var win = Ti.UI.createWindow({
	title: "Remote Data",
	modal: true,
	backgroundColor: "#fff",
	layout: "vertical"
});

var remote = require('api');


var scroll = Ti.UI.createScrollView({
	scrollType: "vertical",
	layout: "vertical"
});


win.add(scroll);
win.open();
