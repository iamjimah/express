const express = require("express");

const app = express();
const assestsRoutes = require("./routes/assetsRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/assets", assestsRoutes);

app.get("/", (req, res) => res.json("This is an api for my assets"));

const port = process.env.PORT || 6000;

app.listen(port, () => console.log("server is running on port ${port}"));
