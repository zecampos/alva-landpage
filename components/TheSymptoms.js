import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Grid,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

export default function TheSymptoms() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
    respiratorias: false,
    coracao: true,
    diabetes: true,
    hipertencao: true,
    cancer: true,
    outras: ""
  });
  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const {
    gilad,
    jason,
    antoine,
    respiratorias,
    coracao,
    diabetes,
    hipertencao,
    cancer,
    outras
  } = state;
  return (
    <Grid container justify="center">
      <Grid item xs={6} md={6} xl={6}>
        <form className={classes.root} noValidate autoComplete="off">
          <FormControl
            fullWidth
            component="fieldset"
            className={classes.formControl}
          >
            <FormLabel style={{ width: "100%" }} component="legend">
              Fulano de Tal, Por favor, Marque o seu quadro clinico de
              doenças/enfermidades cronicas
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={respiratorias}
                    onChange={handleChange}
                    name="respiratorias"
                  />
                }
                label="Respiratórias"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={coracao}
                    onChange={handleChange}
                    name="coracao"
                  />
                }
                label="Coração"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={diabetes}
                    onChange={handleChange}
                    name="diabetes"
                  />
                }
                label="Diabetes"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={hipertencao}
                    onChange={handleChange}
                    name="hipertencao"
                  />
                }
                label="Hipertenção"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={cancer}
                    onChange={handleChange}
                    name="Cancer"
                  />
                }
                label="Cancer"
              />
            </FormGroup>
            <FormHelperText>Be careful</FormHelperText>
            <TextField fullWidth id="outras" label="Outras" variant="filled" />
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
}
