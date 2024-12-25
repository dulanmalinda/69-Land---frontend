const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

const buildPath = path.join(__dirname, "BuildFiles");

app.use(express.static(buildPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Unity WebGL Build is served at http://localhost:${PORT}`);
});
