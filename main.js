const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    title: "Stock .",
    icon: path.join(__dirname, 'icon.ico'), // Coloque seu arquivo de ícone aqui
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  // Carrega o arquivo HTML
  win.loadFile('index.html');

  // Remove a barra de menus padrão (File, Edit, etc) para parecer um App nativo
  win.setMenuBarVisibility(false);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});