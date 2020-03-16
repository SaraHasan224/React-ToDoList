import React, { 
    Component,
    useState} from 'react';
import axios from 'axios';    
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
//Views
import {connect} from 'react-redux';

//Components
import AddNewItemComponent from '../ToDoListComponent/AddNewItemComponent';
class ToDoListComponent extends Component {
    /*
    state = {
        // list :[
        //     { index:0 , value: 'Zeroth Item'},
        //     { index:1 , value: 'First Item'},
        //     { index:2 , value: 'Second Item'},
        //     { index:3 , value: 'Third Item'},
        //     { index:4 , value: 'Fourth Item'},
        // ]
        list : []
    }
    */
    handleDelete(id){
        // const list = this.props.list.filter(todoList => {
        //     return todoList.id != id
        // });
        // this.setState({list});
        this.props.deleteList(id);
    }

    handleAdd = (list) => {
        this.props.addList(list);
        // this.setState({ list});
    }
    /*
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(resp => {
                console.log(resp);
                this.setState({ list: resp.data.slice(0,10)})
        })
    }
    */
    render() { 
        const classes = this.props;
        // const [dense, setDense] = useState(0);
        // const [secondary, setSecondary] = useState(0);
        const state = this.props;
        const secondary = 0;
        const toDoList = state.list.length ? (
            state.list.map( (list, index) => {
                return  <ListItem key={index}>
                            <ListItemAvatar>
                                <Avatar>
                                <FolderIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={list.title}
                                secondary={secondary ? 'Secondary text' : null}
                            />
                            <ListItemSecondaryAction  onClick={() => this.handleDelete(list.id)}>
                                <IconButton edge="end" aria-label="delete">
                                <DeleteIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
            })
        ) : "You have no todo's left";
       
        return (
          <div className={classes.root}>
              <Grid container spacing={2} justify="center" alignContent="center" alignItems="center">
               <Grid item xs={12} md={12} m="2rem" >
                <Typography variant="h4" className={classes.title} noWrap>
                    To do list          
                </Typography>
                <div className={classes.demo}>
                    <List >
                        {toDoList}
                    </List>
                </div>
                </Grid>
              </Grid>
            <AddNewItemComponent addToDoItem={this.handleAdd } list={state.list}/>
          </div>);
    }
}
 
const mapStateToProps = (state) => {
    return {
        list: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteList: (id) => { dispatch({ type: 'DELETE_LIST', id})},
        addList: (list) => { dispatch({ type: 'UPDATE_LIST', list})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ToDoListComponent);