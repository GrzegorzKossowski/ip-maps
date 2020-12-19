//https://tomchentw.github.io/react-google-maps/#introduction
import React from "react";
import GMap from "./google-maps/GMap";
import CONFIG from "../../config/config";

/**
 * Location info module. Shows response data about ip geolocation
 * @param {object} param0 ip location object from ipstack
 */
const Map = ({ ipLocation }) => {
  const { loading, error, data } = ipLocation;

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : error ? (
        <div>No Map avaiable</div>
      ) : (
        data && (
          <GMap
            isMarkerShown
            googleMapURL={CONFIG.GOOGLE_URI}
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
