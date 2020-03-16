import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class AddNewItemComponent extends Component {
  state = {
    value: ''
  }  
  handleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    // 
    const listItem = this.state;
    listItem.id = parseInt((Math.random() * 100), 10);

    const toDoList = [...this.props.list, listItem];
    this.props.addToDoItem(toDoList);
  }

  render(){
    return (
        <div className="row">
          <Typography variant="h6" gutterBottom className="col s6 offset-s3">
            Add New To Do
          </Typography>
          <Grid container spacing={3} className="col s8 offset-s3">
            <Grid item xs={12} sm={6}>
              <form onSubmit={this.handleSubmit}>
                <TextField
                    required
                    id="firstName"
                    name="firstName"
                    fullWidth
                    onChange={this.handleChange}
                />
              </form>
            </Grid>
          </Grid>
        </div>
      );
  }
}

export default AddNewItemComponent;