const fs = require("fs");

fs.readFile("data.js", "utf8", (err, data) => {
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

  fs.readFile("../style_int.css", "utf8", (err, data) => {
    let cssFile = data;

    objectTaskPending.forEach((element, index) => {

      if (index % 2 == 0){
        cssFile += `
          window.bar2 #custom-laTache${index} {
          color: white;
          font-size: 10px;
          margin-top: 3px;
          margin-left: 20px;
          margin-right: 20px;
          padding: 10px;
          padding-top: 5px;
          padding-bottom:5px;


          background-color: rgba(103, 103, 103, 0.8);
          border-radius: 4px;
        }
        `
      } else {
        cssFile += `
          window.bar2 #custom-laTache${index} {
          color: white;
          font-size: 10px;
          margin-top: 3px;
          margin-left: 20px;
          margin-right: 20px;
          padding: 10px;
          padding-top: 5px;
          padding-bottom:5px;


          background-color: rgba(40, 40, 40, 0.8);
          border-radius: 4px;
        }
        `
      }
    })

    console.log(cssFile);
  });

});

