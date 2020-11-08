const express = require('express');
const app = express();
const port = 5050;


app.use("/data/", require("./routes/dataRoutes"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

