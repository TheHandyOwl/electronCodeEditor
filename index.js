console.log('Hello World');

const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    let mainWindow = new BrowserWindow();

    mainWindow.loadURL('file://' + __dirname + '/index.html');
});
