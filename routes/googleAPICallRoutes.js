var express = require('express');
var googleRouter = express.Router();

googleRouter.get('/', function(req, res, next) {

    const language = require("@google-cloud/language");
    const client = new language.LanguageServiceClient();
    
    const text = "hello world!";
    const document = {
      content: text,
      type: "PLAIN_TEXT",
    };
    
    client
      .analyzeSentiment({ document: document })
      .then((results) => {
        const sentiment = results[0].documentSentiment;
    
        console.log("Text: " + text);
        console.log("Sentiment Score: " + sentiment.score);
        console.log("Sentiment Magnitude: " + sentiment.magnitude);
        
        res.send(sentiment);

      })
      .catch((err) => {
        console.error(err);
      });

});

module.exports = googleRouter;