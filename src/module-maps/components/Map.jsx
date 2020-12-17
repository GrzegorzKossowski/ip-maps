//https://tomchentw.github.io/react-google-maps/#introduction
import React from "react";
import GMap from "./google-maps/GMap";
import { useDispatch, useSelector } from "react-redux";

const Map = ({ ipLocation }) => {
  const { loading, error, data } = ipLocation;

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : error ? (
        <div>error</div>
      ) : (
        data && (
          <GMap
            isMarkerShown
            googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            lat={data.latitude}
            lng={data.longitude}
          />
        )
      )}
    </>
  );
};

export default Map;
