import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles
} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  const {
    classes
  } = props;
  return ( 
    <div >
      <AppBar position = "static"
        color= "primary" >
        <Toolbar >
          <Typography variant = "title"
            color = "inherit" >
            Hello React
          </Typography> 
        </Toolbar> 
      </AppBar> 
    </div>
  );
}

export default withStyles(styles)(SimpleAppBar);