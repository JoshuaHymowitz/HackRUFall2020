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


function AppBody({ dispatch, temp }) {
  const classes = useStyles();
  const [data,setData] = React.useState([]);
  // React.useEffect(() => {
  //   // dispatch(temp1("bbb"));
  //   console.log('working')
  //   fetch("/data/").then(res=>{
  //       if(res.ok){
  //           return res.json()
  //       }
  //   }).then(jsonRes=> setData(jsonRes.dataList))
  // }, []);

  return (
    <Grid
      container
      //   direction="column"
      //   justify="space-evenly"
      //   alignItems="center"
    >{
        data.map((data)=>(
            <Grid item>
            <Card>
              <CardContent>
                <Text color="textSecondary" gutterBottom>
                 {data}
                </Text>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))
    }

    </Grid>
  );
}

const mapStateToProps = (state) => ({
  temp: state.state.temp,
});

export default connect(mapStateToProps)(AppBody);

const useStyles = makeStyles((theme) => ({}));
