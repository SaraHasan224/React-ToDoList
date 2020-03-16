import React, { Component } from 'react';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

//Views
import copyright from '../../views/Copyrights/copyrights';
//Component
import LoginFormComponent from './LoginFormComponent';

class LoginComponent extends Component {
    constructor(props)
    {
      super(props);
      this.state = {
        'website': 'Whispering Bell'
      };
    }
    
    render() { 
      const classes = this.props.classes;
        return (
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <LoginFormComponent classes={classes}/>
              </div>
                {
                  copyright({
                    website: this.state.website
                  })
                }
            </Container>
          );
    }
}
 
export default LoginComponent;