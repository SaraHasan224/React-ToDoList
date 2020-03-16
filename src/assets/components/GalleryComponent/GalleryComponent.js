import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import {Link} from 'react-router-dom';
//Views
import navigationBar from '../../views/NavigationBar/navigationBar';
import footerView from '../../views/Footer/footer';


class GalleryComponent extends Component {
    state = { 
        gallery: []
    }
    // componentDidMount()
    // {
    //     axios.get('http://jsonplaceholder.typicode.com/photos')
    //          .then(resp => {
    //             this.setState({ list: resp.data.slice(0,20)})
    //          })
    // }
    render() { 
        const classes = this.props.classes;
        const gallery = this.props.gallery;
        return (
            <React.Fragment>
            <CssBaseline />
            {navigationBar({website: this.props.website,classes:classes})}
            <main>
              {/* Hero unit */}
              <div className={classes.heroContent}>
                <Container maxWidth="sm">
                  <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Album layout
                  </Typography>
                </Container>
              </div>
              <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                  {gallery.map(card => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                        <CardMedia
                          className={classes.cardMedia}
                          image="https://source.unsplash.com/random"
                          title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h5" component="h2">
                            Heading
                          </Typography>
                          <Typography>
                            {card.title}
                          </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={'/gallery/'+card.id}>
                                <Button size="small" color="primary">
                                    View
                                </Button>
                            </Link>
                          <Button size="small" color="primary">
                            Edit
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </main>
                {footerView({website: this.props.website,classes: classes})}
          </React.Fragment>
        );
    }
}
 
const mapGalleryToProps = (state) => {
    return {
        gallery: state.gallery,
        website: state.website
    }
}

export default connect(mapGalleryToProps)(GalleryComponent);