import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button, Grid, TextField, Typography } from "@material-ui/core";
import Head from "next/head";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  input: {
    marginTop: 30
  }
}));

export default function Index() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    type: "patient"
  });
  function handleInputChange(name, value) {
    setValues({ ...values, [name]: value });
  }
  function validForm() {
    const { name, email, password } = values;
    if (name.length > 6 && email.length > 6 && password.length > 6) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <>
      <Head>
        <title>Alva Telemedicine - Registrar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        style={{ height: "100vh" }}
        alignContent="center"
        justify="center"
        container
      >
        <Grid item md={4} lg={4} sm={12} xl={4} xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h2">
              Registrar
            </Typography>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                onChange={value =>
                  handleInputChange("name", value.target.value)
                }
                value={values.name}
                fullWidth
                id="nome"
                label="Nome"
                variant="filled"
                className={classes.input}
                autoComplete="off"
              />

              <TextField
                value={values.email}
                onChange={value =>
                  handleInputChange("email", value.target.value)
                }
                fullWidth
                type="email"
                id="email"
                label="E-mail"
                variant="filled"
                className={classes.input}
                autoComplete="off"
              />

              <TextField
                value={values.password}
                onChange={value =>
                  handleInputChange("password", value.target.value)
                }
                fullWidth
                type="password"
                id="password"
                label="Senha"
                variant="filled"
                className={classes.input}
              />
              <Button
                style={{ marginTop: 30, marginBlock: 20 }}
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                disabled={validForm()}
              >
                Registrar
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
