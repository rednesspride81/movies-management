const express = require("express");
const { rootRouters } = require("./routers/root.routers");
const app = express();
app.use(express.json());
app.use("/api", rootRouters);
app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

const port = 4000;
app.listen(port, () => {
  console.log(`app run on port ${port}`);
});
