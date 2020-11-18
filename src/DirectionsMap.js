import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";

const google = window.google;

const mapStyles = {
  width: '100%',
  height: '100%'
};

const gMapStyles = [
  {
      "featureType": "landscape",
      "stylers": [
          {
              "hue": "#FFA800"
          },
          {
              "saturation": 0
          },
          {
              "lightness": 0
          },
          {
              "gamma": 1
          }
      ]
  },
  {
      "featureType": "road.highway",
      "stylers": [
          {
              "hue": "#ffc000"
          },
          {
              "saturation": -64
          },
          {
              "lightness": 87
          },
          {
              "gamma": 0.10
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "stylers": [
          {
              "hue": "#FBFF00"
          },
          {
              "saturation": 0
          },
          {
              "lightness": 0
          },
          {
              "gamma": 1
          }
      ]
  },
  {
      "featureType": "road.local",
      "stylers": [
          {
              "hue": "#00FFFD"
          },
          {
              "saturation": 0
          },
          {
              "lightness": 30
          },
          {
              "gamma": 1
          }
      ]
  },
  {
      "featureType": "water",
      "stylers": [
          {
              "hue": "#00BFFF"
          },
          {
              "saturation": 6
          },
          {
              "lightness": 8
          },
          {
              "gamma": 1
          }
      ]
  },
  {
      "featureType": "poi",
      "stylers": [
          {
              "hue": "#679714"
          },
          {
              "saturation": 33.4
          },
          {
              "lightness": -25.4
          },
          {
              "gamma": 1
          }
      ]
  },

{
  "featureType": "road.highway",
  "elementType": "labels.icon",
  "stylers": [
      {
          "visibility": "simplified"
      },
      {
          "hue": "#ff0000"
      },
      {
          "saturation": "41"
      }
  ]
},
{
  "featureType": "road.highway.controlled_access",
  "elementType": "all",
  "stylers": [
      {
          "hue": "#ff0000"
      },
      {
          "lightness": "-10"
      },
      {
          "saturation": "-43"
      },
      {
          "gamma": "1.00"
      }
  ]
}
];

class MapContainer extends Component {

  constructor(props){
    super()
    this.state = {
      directions: null,
    }
  }

  componentDidMount() {
    const directionsService = new google.maps.DirectionsService();
      directionsService.route(
        {
          origin: "Chicago, IL",
          destination: "Los Angeles, CA",
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result,
              suppressMarkers: true
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
          var leg = result.routes[0].legs;
          console.log(leg);
        }
      );
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={14}
        defaultOptions={{ styles: gMapStyles, gestureHandling: 'greedy' }}
      >
        <DirectionsRenderer
          directions={this.state.directions}
        />
      </GoogleMap>
    ));

    return (
      <div style={mapStyles}>
        <GoogleMapExample
          containerElement={<div style={{ height: '100%', width: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          style={mapStyles}
          
        />
      </div>
    );
  }
}

export default MapContainer;