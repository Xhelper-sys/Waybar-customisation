const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, 'data.js'), "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const dataObject = JSON.parse(data);
  const objectTaskPending = [];

  dataObject.forEach(element => {
    if (element.status === 'pending'){
      objectTaskPending.push(element);
    }
  });

  fs.readFile(path.join(__dirname, '..', 'config_int.jsonc'), "utf8", (err, data) => {
    const waybar = JSON.parse(data);

    objectTaskPending.forEach((element, index) => {
      waybar[1]['modules-left'].push(`custom/laTache${index}`);
      waybar[1][`custom/laTache${index}`] = {
          "format": element.description,
          "max-length": 35,
          "min-length": 34,
          "align":0
        }
    });

    console.log(JSON.stringify(waybar));
  });

});

