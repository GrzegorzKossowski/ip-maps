//https://tomchentw.github.io/react-google-maps/#introduction
import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const GMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: props.lat, lng: props.lng }} />
      )}
    </GoogleMap>
  ))
);

export default GMap;