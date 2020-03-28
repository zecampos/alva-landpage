import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button, Grid, TextField, Typography } from "@material-ui/core";
import Head from "next/head";

import TheNavLanding from "../components/TheNavLanding";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  subtitle: {}
}));

export default function Index() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Alva Telemedicine - Mapeamento de Grupo de Risco COVID-19</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid style={{ height: "100vh" }} justify="center" container>
        <Grid item xs={12}>
          <TheNavLanding />
        </Grid>
        <Grid item xs={12} sm={12} lg={12} md={12}>
          <Paper className={classes.paper}>
            <Typography component="h4" variant="h4">
              Estamos ajudando a mapear o grupo de Risco do corona vírus
              COVID-19
            </Typography>
            <Typography
              color="primary"
              className={classes.subtitle}
              variant="h6"
            >
              Tornemos visível quem mais precisa de atenção e cuidados neste
              momento. Cadastre-se
            </Typography>
            <div>
              <img style={{ maxWidth: "100%" }} src="/map.jpg" />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
