(function(){
const {app,BrowserWindow} = require('electron');
app.on('ready', function() {
var mainWindow = new BrowserWindow({width: 600, height: 300});
mainWindow.loadURL('file://' + __dirname + '/main.html');
mainWindow.on('closed', function() {
mainWindow = null;
});
});
})();
