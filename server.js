const express = require('express');
const app = express();
const port = 5050;

app.use("/data/", require("./routes/dataRoutes"));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



// const express = require("express");
// const path = require("path");
// const bodyParser = require("body-parser");

// const app = express();
// const port = process.env.PORT || 5050;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // API calls
// app.get("/api/hello", (req, res) => {
//   const language = require("@google-cloud/language");
//   const client = new language.LanguageServiceClient();

//   const text = "hello world!";
//   const document = {
//     content: text,
//     type: "PLAIN_TEXT",
//   };

//   client
//     .analyzeSentiment({ document: document })
//     .then((results) => {
//       const sentiment = results[0].documentSentiment;

//       console.log("Text: " + text);
//       console.log("Sentiment Score: " + sentiment.score);
//       console.log("Sentiment Magnitude: " + sentiment.magnitude);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
//     console.log('aaa')
//   res.send({ express: "Hello From Express" });
// });

// app.post("/api/world", (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`
//   );
// });

// if (process.env.NODE_ENV === "production") {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, "client/build")));

//   // Handle React routing, return all requests to React app
//   app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "client/build", "index.html"));
//   });
// }

// app.listen(port, () => console.log(`Listening on port ${port}`));
