import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography as Text, Button, Grid, Card, CardActions, CardContent } from "@material-ui/core";

import { connect } from "react-redux";
import { temp1 } from "../redux/action";

function AppBody({ dispatch, temp }) {
  const classes = useStyles();
  React.useEffect(() => {
    dispatch(temp1("bbb"));
    temp_thing();
  }, []);

const temp_thing = ()=> {
  const request = require('request');
  const cheerio = require('cheerio');

  //var URL = "https://twitter.com/hashtag/photography?src=hash";
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  var cors = require('cors');
  targetUrl = 'https://twitter.com/hashtag/photography?src=hash'
  request(targetUrl, function (err, res, body) {
   if(err){
      console.log("an error occured : " + err);
   }
   else{
      console.log("It was a success.")
   }
});

}
  return (
    <Grid
      container
    //   direction="column"
    //   justify="space-evenly"
    //   alignItems="center"
    >
      <Grid item>
      <Card >
      <CardContent>
        <Text  color="textSecondary" gutterBottom>
          Word of the Day
        </Text>
        <Text variant="h5" component="h2">
          sdasda
        </Text>
        <Text  color="textSecondary">
          adjective
        </Text>
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

const useStyles = makeStyles((theme) => ({

}));
