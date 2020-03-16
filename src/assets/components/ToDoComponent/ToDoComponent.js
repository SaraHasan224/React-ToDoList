import React, { Component } from 'react';
import {connect} from 'react-redux';
//Views
import navigationBar from '../../views/NavigationBar/navigationBar';
import footerView from '../../views/Footer/footer';
//Component
import ToDoListComponent from '../ToDoListComponent/ToDoListComponent';

class ToDoComponent extends Component {
    
    state = { 
        "open" : false
    }
    
    handleClick() {
        this.setState({"open": true});
    }

    render() { 
        const classes = this.props.classes;
        return (
          <React.Fragment>
              {navigationBar({website: this.props.website,classes:classes})}
              <ToDoListComponent classes={classes} />
              {footerView({website: this.props.website,classes: classes})}
          </React.Fragment>);
    }
}
 
const mapStateToProps = (state) => {
    return {
        website: state.website
    }
}

export default connect(mapStateToProps)(ToDoComponent);