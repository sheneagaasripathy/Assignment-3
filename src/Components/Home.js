import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      
    },
    
  }));
  const style = {
    root: {
      minWidth: 275,
      backgroundColor:'#212121',
      marginTop: 20,
      height: 200,
      color: 'white'
    },
    title: {
      fontSize: 24,
      textAlign:'center'
    },
}


  function Home() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}  style={{ padding: 10 }}>
        <Grid container spacing={1} >
          <Grid item xs>
          </Grid>
          <Grid item xs = {8}>
          <Paper>
              <Card style={style.root} variant="outlined">
                <div style = {{marginLeft : 30}}>
                  <h1>Welcome to the Book Shop</h1> 
                  <p>Good friends,good books,and a sleepy conscience:this is the ideal life</p>
                  -Sineka
                </div>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
          </Grid>
        </Grid>
        </div>
    )
  }

export default Home 