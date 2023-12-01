const XLSX = require('xlsx');

function excelToJson(filePath) {
    const workbook = XLSX.readFile(filePath);
    const sheetNames = workbook.SheetNames;
    const sheetIndex = 0;
    const worksheet = workbook.Sheets[sheetNames[sheetIndex]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, {raw: false});
    return jsonData;
}

const filePath = './docs/file.xlsx';
const jsonData = excelToJson(filePath);
console.log(jsonData);
