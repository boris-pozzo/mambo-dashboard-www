import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import {FormattedMessage, defineMessages, injectIntl} from 'react-intl';
import ReactMapboxGl, {Feature, Layer} from 'react-mapbox-gl';


const MapboxGL = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoibG91aXNjdXJyaWUiLCJhIjoiY3MwR3B3QSJ9._5UXyjEIY0YisuAz9c_tJA'
});

const mapStyle = 'mapbox://styles/louiscurrie/cizcq06l600292so15ydwjckr';
const zoom = [8];

const messages = defineMessages({
  lblWelcome: {
    id: 'lbl.welcome',
    defaultMessage: 'Welcome'
  },
  lblIntroduction: {
    id: 'lbl.introduction',
    defaultMessage: 'Introduction'
  }
});

class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MapboxGL
        style="mapbox://styles/mapbox/streets-v8"
        zoom={zoom}
        containerStyle={{
          height: "500px",
          width: "100%"
        }}>
        <Layer
          type="symbol"
          id="marker"
          layout={{"icon-image": "marker-15"}}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
        </Layer>
      </MapboxGL>
    );
  }
}

// TypeChecking for properties
Map.propTypes = {
  text: PropTypes.string
};

export default injectIntl(Map);




