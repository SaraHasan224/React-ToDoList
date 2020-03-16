import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import 'materialize-css';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/js/global';
import 'materialize-css/js/forms.js';

import { makeStyles } from '@material-ui/core/styles';
//Component
import LoginComponent from './assets/components/LoginComponent/LoginComponent';
import ToDoComponent from './assets/components/ToDoComponent/ToDoComponent';
import MapComponent from './assets/components/MapComponent/MapComponent';
import GalleryComponent from './assets/components/GalleryComponent/GalleryComponent';
import GalleryDetailsComponent from './assets/components/GalleryComponent/GalleryDetailsComponent';



const useStyles = makeStyles(theme => ({  root: {
  flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  addToDoForm: {
    margin: '0 auto',
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  navigation: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginRight: theme.spacing(2),
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  navigation_label: {
    textTransform: 'capitalize',
    marginRight: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
   '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: theme.palette.background.paper,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));


function App() {
  const classes = useStyles();

  return (
    <BrowserRouter >
      <div className={classes.root}>
        <Switch>
          <Route path="/" exact>
            <LoginComponent classes={classes}/>
          </Route>
          
          <Route path="/dashboard">
            <MapComponent classes={classes}/>
          </Route>

          <Route path="/todo">
            <ToDoComponent classes={classes}/>
          </Route>

          <Route path="/gallery" exact>
            <GalleryComponent classes={classes}/>
          </Route>
          <Route path="/gallery/:id">
            {() => <GalleryDetailsComponent classes={classes}/>}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
