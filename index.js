// local mocule
let sum = require("./sum");
sum(10, 20);

// ========================================================

// core modules
let fs = require("fs");
let opr = process.argv[2];

const WriteFile = () => {
  global.fileName = process.argv[3];
  fs.writeFile(fileName, "", (err) => {
    if (err) throw err;
    console.log("file hass been made");
  });
};
const ReadFile = () => {
  fileName = process.argv[3];
  if (fileName) {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) console.log("Please create the file first before read it");
      console.log(data);
    });
  }
};
const AppendFile = () => {
  fileName = process.argv[3];
  let fileData = process.argv[4];
  fs.appendFile(fileName, "\n" + fileData, (err) => {
    if (err) throw err;
    console.log("The data has been append to your file");
  });
};
const DeleteFile = () => {
  fileName = process.argv[3];
  fs.unlink(fileName, (err) => {
    if (err) throw err;
    console.log("The file was deleted");
  });
};
const RenameFile = () => {
  fileName = process.argv[3];
  fileNewName = process.argv[4];
  fs.rename(fileName, fileNewName, (err) => {
    if (err) throw err;
    console.log("Rename complete");
  });
};

if (opr == "WriteFile") {
  WriteFile();
} else if (opr == "ReadFile") {
  ReadFile();
} else if (opr == "AppendFile") {
  AppendFile();
} else if (opr == "DeleteFile") {
  DeleteFile();
} else if (opr == "RenameFile") {
  RenameFile();
} else {
  console.log(
    "Please write WriteFile, ReadFile, AppendFile, DeleteFile, RenameFile to perform the task."
  );
}
