import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid } from "@material-ui/core";
import MaskedInput from "react-text-mask";
import NumberFormat from "react-number-format";
import InputMask from "react-input-mask";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
export default function TheLogin({ values, handleInputChange }) {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={6} md={6} xl={6}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            onChange={value => handleInputChange("name", value.target.value)}
            value={values.name}
            fullWidth
            id="nome"
            label="Nome"
            variant="filled"
          />
          <TextField
            value={values.surname}
            onChange={value => handleInputChange("surname", value.target.value)}
            fullWidth
            id="sobreNome"
            label="Sobrenome"
            variant="filled"
          />
          <TextField
            value={values.cellPhone}
            onChange={value =>
              handleInputChange("cellPhone", value.target.value)
            }
            fullWidth
            type="number"
            id="formatted-numberformat-input"
            label="Celular"
            variant="filled"
          />

          <TextField
            value={values.email}
            onChange={value => handleInputChange("email", value.target.value)}
            fullWidth
            type="email"
            id="email"
            label="E-mail"
            variant="filled"
          />
        </form>
      </Grid>
    </Grid>
  );
}
