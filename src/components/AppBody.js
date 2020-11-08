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
  const [data,setData] = React.useState(['a']);
  React.useEffect(() => {
    // dispatch(temp1("bbb"));

    // fetch("/googleData/").then(res=>{
    //     if(res.ok){
    //         console.log(res);
    //         return res.json()
    //     }
    // }).then(jsonRes=> console.log(jsonRes)).catch((err)=>console.log(err));

    fetch("/data/").then(res=>{
        if(res.ok){
            return res.json()
        }
    }).then(jsonRes=> console.log(jsonRes));

    // callApi()
    // .then(res => console.log(res.express))
    // .catch(err => console.log(err));

  }, []);

//   const callApi = async () => {
//     const response = await fetch('/api/hello');
//     const body = await response.json();
//     console.log(body);
//     if (response.status !== 200) throw Error(body.message);

//     return body;
//   };

//   handleSubmit = async e => {
//     e.preventDefault();
//     const response = await fetch('/api/world', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ post: post }),
//     });
//     const body = await response.text();

//     this.setState({ responseToPost: body });
//   };

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
