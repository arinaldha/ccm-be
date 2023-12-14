const express = require("express");
const app = express();
const port = process.env.PORT;

const HomeRoute = require("./routes/home");

app.get("/", HomeRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
