import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeCP from "../MainCP/HomeCP";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function CpNavbar() {
  const classes = useStyles();
  let { path } = useRouteMatch();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="sticky" color="primary">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Control Panel</Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div className="Body">
        <Switch>
          <Route exact path={path}>
            <h3>Esto seria el main</h3>
          </Route>
          <Route path={`${path}/cp`}>
            <HomeCP />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default CpNavbar;
