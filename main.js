const { app, Menu, BrowserWindow } = require('electron');
const path = require('node:path')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    Menu.setApplicationMenu(null)
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow();
});