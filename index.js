console.log('Hello World');

const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    let mainWindow = new BrowserWindow();

    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.webContents.on('will-navigate', (e, url) => {
        e.preventDefault(); // To cancel de default event
        //console.log(url);

        mainWindow.webContents.send('open-file', url);
    });

    mainWindow.webContents.on('devtools-opened', (e) => {
        console.log('devtools opened. Use at your own risk');
    });

});
