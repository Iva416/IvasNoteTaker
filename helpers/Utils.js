const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

  const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeToFile(file, parsedData);
      }
    });
  };

  const deleteItem = (deleteId, file) => {
    fs.readFile(file, 'utf8', (err,data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        const newData = parsedData.filter(note => note.id !== deleteId);
        writeToFile(file, newData);
      }
    });
  }
  
  module.exports = { readFromFile, writeToFile, readAndAppend, deleteItem };