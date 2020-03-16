import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';

import {
  Link
} from "react-router-dom";

function navigationBar(props)
{
  const classes = props.classes;
    return (
      <AppBar position="relative">
              <Toolbar>
                <CameraIcon className={classes.icon} />
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                    {props.website}
                </Typography>
                    <Link to={"/dashboard"} variant="button" color="textPrimary" href="#" className={classes.link}>
                      Dashboard
                    </Link>
                    <Link to={"/todo"} variant="button" color="textPrimary" href="#" className={classes.link}>
                      To do List
                    </Link>
                    <Link to={"/gallery"} variant="button" color="textPrimary" href="#" className={classes.link}>
                      Gallery
                    </Link>
                    <Link to={"/"}>
                      <Button href="#" color="primary" variant="outlined" className={classes.link}>
                          Login
                      </Button>
                    </Link>
              </Toolbar>
        </AppBar>
    )
}

export default navigationBar;