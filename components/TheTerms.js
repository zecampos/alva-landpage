import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
export default function TheTerms({ values, handleInputChange }) {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={6} md={6} xl={6}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            id="cpf"
            label="Termos"
            multiline
            rows={6}
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur orci consequat eros pellentesque facilisis. Sed vehicula tincidunt risus in malesuada. Maecenas bibendum, metus vitae accumsan pharetra, libero justo luctus magna, eget imperdiet nisl dui nec quam. Donec maximus risus id blandit suscipit. Phasellus vitae orci quis risus tincidunt imperdiet non ac est. Suspendisse cursus, justo sit amet iaculis maximus, augue ligula faucibus erat, sit amet venenatis urna justo eu nisi. Maecenas cursus congue orci, vitae maximus mi iaculis ac. Ut auctor mauris metus, sit amet tempus nibh porttitor sed."
            disabled
            variant="filled"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={values.acceptedTerms}
                name="acceptedTerms"
                onChange={value =>
                  handleInputChange("acceptedTerms", value.target.checked)
                }
              />
            }
            label="Aceito os Termos"
          />
          <TextField
            fullWidth
            id="cpf"
            value={values.cpf}
            label="CPF"
            variant="filled"
            onChange={value => handleInputChange("cpf", value.target.value)}
          />
          <InputLabel id="demo-customized-select-label">Genero</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={values.gender}
            fullWidth
            variant="filled"
            label="Genero"
            title="Genero"
            onChange={value => handleInputChange("gender", value.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Homem">Homem</MenuItem>
            <MenuItem value="Mulher">Mulher</MenuItem>
            <MenuItem value="Outro">Outro</MenuItem>
          </Select>
        </form>
      </Grid>
    </Grid>
  );
}
