const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("API is running, Good luck!"));

PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
