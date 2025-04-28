fetch("/readfile")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("fileContent").textContent = data;
  })
  .catch((error) => {
    console.log("Error fetching file:", error);
    document.getElementById("fileContent").textContent = "Failed to load file.";
  });
