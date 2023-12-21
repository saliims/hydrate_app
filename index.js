// main.js
const { app, BrowserWindow, Notification } = require("electron");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile("index.html");

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  // Change the interval to 10 seconds (10000 milliseconds)
  setInterval(() => {
    const notification = new Notification({
      title: "Stay Hydrated!",
      body: "It's time to drink water.",
    });
    notification.show();
  }, 10000);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
