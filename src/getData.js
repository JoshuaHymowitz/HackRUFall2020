
async function getData() {
    // Imports the Google Cloud client library
    const language = require('@google-cloud/language');
  
    // Instantiates a client
    const client = new language.LanguageServiceClient();
  
    // The text to analyze
    const text = 'Hello, world!';
  
    const document = {
      content: text,
      type: 'PLAIN_TEXT',
    };
  
    // Detects the sentiment of the text
    const [result] = await client.analyzeSentiment({document: document});
    const sentiment = result.documentSentiment;
  
    console.log(`Text: ${text}`);
    console.log(`Sentiment score: ${sentiment.score}`);
    console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
  }


// const getData = () => {
//     const language = ('require@google-cloud/language');
//     const client = new language.LanguageServiceClient();

//     const text = 'hello world';
//     const document = {
//         content: text,
//         type: 'PLAIN_TEXT'
//     }

//     client.analyzeSentiment({document: document}).then(results => {
//         const sentiment = results[0].documentSentiment;
//         const sentiment_score = results[0].documentSentiment.score;
//         const sentiment_magnitude = results[0].documentSentiment.magnitude;

//         console.log('Text: ' + {text}); 
//         console.log('Sentiment score:' + {sentiment_score});
//         console.log('Sentiment magnitude:' + {sentiment_magnitude});
//     })
//     .catch(err => {
//         console.error('ERROR: ' + err);
//     })
// }

