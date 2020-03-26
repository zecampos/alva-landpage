import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useRouter } from "next/router";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  nav: {
    backgroundColor: "#EAFCDE",
    paddingLeft: 15,
    paddingRight: 15
  },
  navDiv: {
    justifyContent: "space-between"
  },
  btnAcess: {
    backgroundColor: "#008037",
    color: "#FFF",
    marginLeft: 15,
    marginRight: 15
  },
  btnRegister: {
    backgroundColor: "#EDB44D",
    color: "#FFF",
    marginLeft: 15,
    marginRight: 15
  },
  title: {
    flexGrow: 1,
    color: "#008037"
  },
  menuApp: {
    color: "#008037"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <div className={classes.root}>
      <AppBar className={classes.nav} position="static">
        <Toolbar className={classes.navDiv}>
          <div>
            <Typography variant="h5" className={classes.title}>
              Alva
            </Typography>
          </div>
          <div
            style={{
              justifyContent: "space-around"
            }}
          >
            <Hidden mdUp>
              <IconButton
                edge="start"
                className={classes.menuApp}
                aria-label="menu"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>Acessar</MenuItem>
                <MenuItem onClick={() => router.push("/register")}>
                  Cadastrar
                </MenuItem>
              </Menu>
            </Hidden>
            <Hidden smDown>
              <Button className={classes.btnAcess}>Acessar</Button>
              <Button
                onClick={() => router.push("/register")}
                className={classes.btnRegister}
              >
                Quero me cadastrar agora!
              </Button>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
