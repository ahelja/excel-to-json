# README

## Electron App for Converting Excel Files to JSON

This Electron application allows you to convert Excel files into JSON format. The user can drag and drop an Excel file into the application, which will then be converted into a JSON file.

### Installation

To install the application, you need to have Node.js and npm installed on your system. After cloning the repository, run the following command to install the dependencies:

```bash
npm install
```

### Running the Application

To run the application, use the following command:

```bash
npm start
```

### Features

The application has a fixed window size of 300x300 pixels. When the application is ready, an HTML file named 'index.html' is loaded. If all application windows are closed, the application quits, unless it is running on a Darwin (macOS) system, in which case it stays active.

The application listens for an 'ondragstart' event from the UI. When a file is dragged into the application, the file path is sent as an argument to the event. The application then reads the Excel file, converts it into a JSON object, and finally opens a dialog to save the JSON file.

### Dependencies

The application uses the following modules:

- `electron`: to create the desktop application.
- `xlsx`: to read Excel files.
- `fs`: to write the JSON file.

### Notes

The application currently only supports converting the first worksheet of an Excel file. If the Excel file contains multiple worksheets, only the first one will be converted. Also, the application does not support converting formulas or cells with special formatting. All data is read as plain text.