import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3B5A9A"
    },
    secondary: {
      main: "#EAFCDE"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    }
  }
});
theme.typography.h4 = {
  fontSize: "1.5rem",
  [theme.breakpoints.only("xs")]: {
    fontSize: "1.2rem"
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "1.4rem"
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "1.6rem"
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: "1.8rem"
  },
  [theme.breakpoints.only("xl")]: {
    fontSize: "2rem"
  }
};
theme.typography.h6 = {
  fontSize: "1.25rem",
  [theme.breakpoints.only("xs")]: {
    fontSize: "1rem"
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "1.05rem"
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "1.15rem"
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: "1.25rem"
  },
  [theme.breakpoints.only("xl")]: {
    fontSize: "1.25rem"
  }
};

export default theme;
