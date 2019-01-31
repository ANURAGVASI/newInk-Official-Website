const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(process.env.PORT, () => {
  console.log("server running on port", PORT);
});
