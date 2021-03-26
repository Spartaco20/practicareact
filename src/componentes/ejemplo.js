import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

//function suma(a,b){
//    return a+b;
//}

function Ejemplo() {

    const classes = useStyles();
    const [clicks, setClicks] = useState(0);
    //   const [marcas,setMarcas] = useState('iPhone');

    const aumentarValor = () => {
        setClicks(clicks + 1)
        if(clicks === 10){
            setClicks(0)
        }
    }

    useEffect(() => {
        //comillas invertidas ALT + 96
        document.title = `Cantidad de Clicks ${clicks}`;
    })

    return (
        <div>
            <Container fixed>

                {clicks === 10 ? <Alert severity="success">Usted llego a {clicks}!</Alert> : ''}
                
                <Button
                    onClick={aumentarValor}
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    Contar {clicks}
                </Button>
            </Container>
        </div>
    );

}

export default Ejemplo;