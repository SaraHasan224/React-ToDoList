import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
//Views
import navigationBar from '../../views/NavigationBar/navigationBar';
import footerView from '../../views/Footer/footer';


class GalleryDetailsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            post:[]
        }
    }
    componentDidMount()
    {
        let id = this.props.match.params.id;
        axios.get('http://jsonplaceholder.typicode.com/photos/'+id)
             .then(resp => {
                this.setState({ post: resp.data})
             })
    }
    render() { 
        const classes = this.props.classes;
        const post = this.state.post;
        return (
            <React.Fragment>
                <CssBaseline />
                {navigationBar({website: this.props.website,classes:classes})}
                    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
                    {/* Increase the priority of the hero background image */}
                    {<img style={{ display: 'none' }} src='https://source.unsplash.com/random' alt='Image Random' />}
                    <div className={classes.overlay} />
                    <Grid container>
                        <Grid item md={6}>
                        <div className={classes.mainFeaturedPostContent}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {post.title}
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                            {post.url}
                            </Typography>
                            <Link variant="subtitle1" href="#">
                            {post.thumbnailUrl}
                            </Link>
                        </div>
                        </Grid>
                    </Grid>
                    </Paper>
                    
                    <Grid item xs={12} md={12}>
                        <CardActionArea component="a" href="#">
                        <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {post.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.description}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Continue reading...
                            </Typography>
                            </CardContent>
                        </div>
                        <Hidden xsDown>
                            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
                        </Hidden>
                        </Card>
                    </CardActionArea>
                    </Grid>
                {footerView({website: this.props.website,classes: classes})}
          </React.Fragment>
        );
    }
}
 
const mapGalleryDetailsToProps = (state,ownProps) => {
    // let id = ownProps.match.params.id;
    return {
        website: state.website,
        // post: state.post.find(post => post.id === id)
    }
}

export default connect(mapGalleryDetailsToProps)(withRouter(GalleryDetailsComponent));