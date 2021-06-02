const {app, BrowserWindow, screen} = require("electron");

// functions that creates window
function createWindow(){

  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const win = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {}
  })

  win.loadURL("http://localhost:3000")

}

// when electron app is ready it will call createwindow
app.on("ready", createWindow)

/*
this event triggers, when launching the app for the first time,
and clicking on the application's dock or taskbar icon.
*/
app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0){
    createWindow()
  }
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})