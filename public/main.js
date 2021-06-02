const {app, BrowserWindow, screen, Tray, nativeImage} = require("electron");
const path = require('path')

let tray, win;

function createWindow(){
  // functions that creates window
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({
    width: 1380,
    height: 800,
    show: false,
    icon: path.join('hero-logo.png'),
    center: true,
    frame: true,
    fullscreenable: false,
    resizable: false,
    transparent: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  //win.loadURL("http://localhost:3000")

  // Open the DevTools.
	// mainWindow.webContents.openDevTools()
}

const createTray = () => {
  //const icon = path.join(__dirname, 'src/hero-logo.png');
  //const nImage = nativeImage.createFromPath(icon);

  tray = new Tray(path.join('hero-logo.png')); //nImage
  tray.on('click', (event) => toggleWindow())
}

const toggleWindow = () => {
  win.isVisible() ? win.hide() : showWindow()
}

const showWindow = () => {
  const position = windowPosition()
  //win.setPosition(position.x, position.y)
  win.show()
}

const windowPosition = () => {
  const windowBounds = win.getBounds()
  const trayBounds = tray.getBounds()

  //const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2))
  //const y = Math.round(trayBounds.y + trayBounds.height)
  const x = Math.round(windowBounds.width / 2);
  const y = Math.round(windowBounds.height / 2);

  return {x, y}
}

//app.on("ready", createWindow)

// when electron app is ready it will call createwindow
app.whenReady().then(() => {
  createTray()

  // Splash screen test
  createWindow()
  splash = new BrowserWindow({ width: 810, height: 610, transparent: true, frame: false, alwaysOnTop: true, center: true });
  splash.loadURL(`file://${__dirname}/splash.html`);
  win.loadURL("http://localhost:3000")
  setTimeout(() => {
  }, 20000);

  win.once('ready-to-show', () => {
    splash.destroy();
    showWindow();
  })
  // Splash screen test OVER
  
  
  /*
  this event triggers, when launching the app for the first time,
  and clicking on the application's dock or taskbar icon.
  */
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})