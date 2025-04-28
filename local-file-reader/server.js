const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static files from "public" folder
app.use(express.static("public"));

//API endpoint to read file
app.get("/readfile", (req, res) => {
  const filePath = "D:\\Node_projects\\LocalFileReader\\toRead.txt";

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log("Error reading the file:", err);
      return res.status(500).send("Failed to read file.");
    }
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
