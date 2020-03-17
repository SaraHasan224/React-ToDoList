import React, { Component } from 'react';
import {connect} from 'react-redux';
import GoogleMapReact from 'google-map-react';
//Views
import navigationBar from '../../views/NavigationBar/navigationBar';
import footerView from '../../views/Footer/footer';
 
 
class MapComponent extends Component {
  static defaultProps = {
    center: {
      lat: 24.8607,
      lng: 67.0011
    },
    zoom: 11
  };
 
  render() {
    const classes = this.props.classes;
    return (
      // Important! Always set the container height explicitly
      <React.Fragment>
        {navigationBar({website: this.props.website,classes:classes})}
         <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: /*API_KEY*/ }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
          </GoogleMapReact>
        </div>
        {footerView({website: this.props.website,classes: classes})}
      </React.Fragment>
    )
  }
}
 
const websiteToProps = (state) => {
  return {
      website: state.website
  }
}

export default connect(websiteToProps)(MapComponent)