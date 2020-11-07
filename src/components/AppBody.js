import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography as Text,
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";

import { connect } from "react-redux";
import { temp1 } from "../redux/action";

async function getAIData() {
  const language = require("@google-cloud/language");
  const client = new language.LanguageServiceClient();

  const text = "hello world";
  const document = {
    content: text,
    type: "PLAIN_TEXT",
  };

  const [result] = await client.analyzeSentiment({document: document});
  const sentiment = result.documentSentiment;
 
  console.log(`Text: ${text}`);
  console.log(`Sentiment score: ${sentiment.score}`);
  console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
  
//   await client
//     .analyzeSentiment({ document: document })
//     .then((results) => {
//       const sentiment = results[0].documentSentiment;
//       const sentiment_score = results[0].documentSentiment.score;
//       const sentiment_magnitude = results[0].documentSentiment.magnitude;

//       console.log("Text: " + { text });
//       console.log("Sentiment score:" + { sentiment_score });
//       console.log("Sentiment magnitude:" + { sentiment_magnitude });
//     })
//     .catch((err) => {
//       console.error("ERROR: " + err);
//     });
}

function AppBody({ dispatch, temp }) {
  const classes = useStyles();
  React.useEffect(() => {
    dispatch(temp1("bbb"));
    getAIData();
  }, []);

  return (
    <Grid
      container
      //   direction="column"
      //   justify="space-evenly"
      //   alignItems="center"
    >
      <Grid item>
        <Card>
          <CardContent>
            <Text color="textSecondary" gutterBottom>
              Word of the Day
            </Text>
            <Text variant="h5" component="h2">
              sdasda
            </Text>
            <Text color="textSecondary">adjective</Text>
            <Text variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Text>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  temp: state.state.temp,
});

export default connect(mapStateToProps)(AppBody);

const useStyles = makeStyles((theme) => ({}));
