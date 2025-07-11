const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    console.log("Received request on /");
    res.send("Lernix backend is running");
  });
  

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
