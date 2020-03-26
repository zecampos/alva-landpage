import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Grid,
  ListItemText,
  List,
  ListItem,
  Paper,
  InputAdornment
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  containerItem: {
    height: 500
  },
  input: {
    backgroundColor: theme.palette.common.white
  }
}));
export default function TheLocal({ values, handleInputChange, setAdress }) {
  const classes = useStyles();
  const [cep, setCep] = React.useState("");

  async function getAdress() {
    try {
      const getCep = await axios.get(`viacep.com.br/ws/${cep}/json/`);
      console.log("cep", getCep.data);
    } catch (e) {
      console.log("erro ao buscar cep", e);
    }
  }

  return (
    <Grid container justify="center">
      <Grid item xs={6} md={6} xl={6}>
        <TextField
          fullWidth
          id="cep"
          value={values.cpf}
          label="CEP"
          helperText="apenas numeros"
          type="number"
          variant="filled"
        />
        {/* <GooglePlacesAutocomplete
          autocompletionRequest={{
            componentRestrictions: {
              country: ["br"]
            }
          }}
          //   onSelect={goBusca}
          renderInput={props => (
            <TextField
              id="standard-basic"
              fullWidth
              label="Onde voce quer ir? pesquise aqui..."
              variant="filled"
              className={classes.input}
              {...props}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    style={{ backgroundColor: "#f5f" }}
                    position="end"
                  >
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
            />
          )}
          renderSuggestions={(active, suggestions, onSelectSuggestion) => (
            <Paper square>
              <List component="nav" aria-label="secondary mailbox folders">
                {suggestions.map(suggestion => (
                  <ListItem
                    key={suggestion.description}
                    onClick={event => onSelectSuggestion(suggestion, event)}
                    button
                  >
                    <ListItemText primary={suggestion.description} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}
        /> */}
      </Grid>
    </Grid>
  );
}
