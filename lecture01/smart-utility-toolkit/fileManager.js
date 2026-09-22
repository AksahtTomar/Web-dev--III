const fs = require("fs");
const log = require("./modules/logger");

const filePath = "./test.txt";


log("Creating File...");
fs.writeFile(filePath, "Hello Node.js", (err) => {
  if (err) {
    console.log("Error creating file:", err.message);
    return;
  }
  log("File Created");

  
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err.message);
      return;
    }
    log("Reading File");
    console.log(data);

    
    fs.appendFile(filePath, "\nLearning FS Module", (err) => {
      if (err) {
        console.log("Error updating file:", err.message);
        return;
      }
      log("File Updated");

      
      fs.readFile(filePath, "utf8", (err, updatedData) => {
        if (err) {
          console.log("Error reading updated file:", err.message);
          return;
        }
        console.log(updatedData);

        
        fs.unlink(filePath, (err) => {
          if (err) {
            console.log("Error deleting file:", err.message);
            return;
          }
          log("File Deleted");
        });
      });
    });
  });
});


fs.readFile("./doesNotExist.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Handled Error: File does not exist -", err.message);
  } else {
    console.log(data);
  }
});


