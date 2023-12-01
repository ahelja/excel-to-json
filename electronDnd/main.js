const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const XLSX = require('xlsx');
const fs = require('fs');

function createWindow () {
  const win = new BrowserWindow({
    width: 300,
    height: 300,

    minWidth: 300,
    minHeight: 300,

    maxWidth: 300,
    maxHeight: 300,

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
  
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('ondragstart', (event, filePath) => {
  const jsonData = excelToJson(filePath);
  dialog.showSaveDialog({
    title: 'Salva come JSON',
    defaultPath: 'file.json',
    filters: [{ name: 'JSON', extensions: ['json'] }]
  }).then(result => {
    if (!result.canceled) {
      fs.writeFileSync(result.filePath, JSON.stringify(jsonData, null, 2));
    }
  });
});

function excelToJson(filePath) {
  const workbook = XLSX.readFile(filePath);
  const sheetNames = workbook.SheetNames;
  const sheetIndex = 0;
  const worksheet = workbook.Sheets[sheetNames[sheetIndex]];
  const jsonData = XLSX.utils.sheet_to_json(worksheet, {raw: false});
  return jsonData;
}
