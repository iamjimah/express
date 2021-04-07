const express = require("express");
const assets = require("./assets");

const app = express();
const assestsRoutes = require("./routes/assetsRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/assets", assestsRoutes);

app.get("/api/assets", (req, res) => {
  res.json(assets);
});

const port = process.env.PORT || 6000;

app.listen(port, console.log(`server is running on port ${port}`));
