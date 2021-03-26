import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  altura: {
    paddingTop: 80,
  }
}));

function App() {
  const classes = useStyles();
  const [numeroInicial, setNumeroInicial] = useState(0,0);
  const [valorActual, setValorActual] = useState('');
  const [flag, setFlag] = useState(false);

  function handleClickOperacion(op){
    if(op === "/"){
      setFlag(true);
      if(numeroInicial === 0){
        setNumeroInicial(parseFloat(valorActual));
      } else {
        setValorActual(numeroInicial / parseFloat(valorActual));
        setNumeroInicial(parseFloat(valorActual));
      }
      console.log("valor Actual ->" + valorActual);
      console.log("Numero Inicial ->" + numeroInicial);
      //setNumeroInicial(numeroInicial / valorActual);
    }

    else if(op === "X"){
      setFlag(true);
      if(numeroInicial === 0){
        setNumeroInicial(parseFloat(valorActual));
      } else {
        setValorActual(numeroInicial * parseFloat(valorActual));
        setNumeroInicial(parseFloat(valorActual));
      }
      console.log("valor Actual ->" + valorActual);
      console.log("Numero Inicial ->" + numeroInicial);
      //setNumeroInicial(numeroInicial / valorActual);
    }

    else if(op === "-"){
      setFlag(true);
      if(numeroInicial === 0){
        setNumeroInicial(parseFloat(valorActual));
      } else {
        setValorActual(numeroInicial - parseFloat(valorActual));
        setNumeroInicial(parseFloat(valorActual));
      }
      console.log("valor Actual ->" + valorActual);
      console.log("Numero Inicial ->" + numeroInicial);
      //setNumeroInicial(numeroInicial / valorActual);
    }

    else if(op === "+"){
      setFlag(true);
      if(numeroInicial === 0){
        setNumeroInicial(parseFloat(valorActual));
      } else {
        setValorActual(numeroInicial + parseFloat(valorActual));
        setNumeroInicial(parseFloat(valorActual));
      }
      console.log("valor Actual ->" + valorActual);
      console.log("Numero Inicial ->" + numeroInicial);
      //setNumeroInicial(numeroInicial / valorActual);
    }

    else if(op === "%"){
      setFlag(true);
      if(numeroInicial === 0){
        setNumeroInicial(parseFloat(valorActual));
      } else {
        setValorActual(numeroInicial % parseFloat(valorActual));
        setNumeroInicial(parseFloat(valorActual));
      }
      console.log("valor Actual ->" + valorActual);
      console.log("Numero Inicial ->" + numeroInicial);
      //setNumeroInicial(numeroInicial / valorActual);
    }

    else if(op === "AC" || op === "CE"){
      setFlag(true);
      if(numeroInicial === 0){
        setNumeroInicial(" ");
      } else {
        setValorActual(" ");
        setNumeroInicial(" ");
      }
    }

    else if(op === "="){
      setFlag(true);
      if(numeroInicial === 0){
        setNumeroInicial(" ");
      } else {
        setValorActual(" ");
        setNumeroInicial(" ");
      }
    }

  }

  function handleClickFlecha(tecla) {
    //console.log('elemento -> ', tecla);
    if(!flag){
      setValorActual(valorActual + tecla);
    } else {
      setValorActual(tecla);
      setFlag(false);
    }
    
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed className={classes.altura}>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField value={valorActual} id="outlined-basic" fullWidth label="Ingrese un valor" variant="outlined" />
                  </form>
                </Paper>
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button onClick={()=>handleClickOperacion("AC")} variant="outlined" color="secondary">
                    AC
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button onClick={()=>handleClickOperacion("CE")} variant="outlined">
                    CE
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button onClick={()=>handleClickOperacion("%")} variant="outlined" color="primary">
                    %
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button onClick={()=>handleClickOperacion("/")} variant="outlined" color="primary">
                    /
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}></Grid>

              <Grid item xs={2}></Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button onClick={()=>handleClickFlecha("7")} variant="outlined" color="primary">
                    7
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button onClick={()=>handleClickFlecha("8")} variant="outlined" color="primary">
                    8
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button onClick={()=>handleClickFlecha("9")} variant="outlined" color="primary">
                    9
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button onClick={()=>handleClickOperacion("X")} variant="outlined" color="primary">
                    X
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}></Grid>
            
              <Grid item xs={2}></Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button onClick={()=>handleClickFlecha("4")} variant="outlined" color="primary">
                    4
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button onClick={()=>handleClickFlecha("5")} variant="outlined" color="primary">
                    5
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button onClick={()=>handleClickFlecha("6")} variant="outlined" color="primary">
                    6
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button onClick={()=>handleClickOperacion("-")} variant="outlined" color="primary">
                    -
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}></Grid>

              <Grid item xs={2}></Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button onClick={()=>handleClickFlecha("1")} variant="outlined" color="primary">
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button onClick={()=>handleClickFlecha("2")} variant="outlined" color="primary">
                    2
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button onClick={()=>handleClickFlecha("3")} variant="outlined" color="primary">
                    3
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button onClick={()=>handleClickOperacion("+")} variant="outlined" color="primary">
                    +
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}></Grid>

              <Grid item xs={2}></Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button onClick={()=>handleClickFlecha("0")} variant="outlined" color="primary">
                    0
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button onClick={()=>handleClickFlecha(".")} variant="outlined" color="primary">
                    .
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Button onClick={()=>handleClickOperacion("=")} variant="outlined" color="primary">
                    =
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default App;
