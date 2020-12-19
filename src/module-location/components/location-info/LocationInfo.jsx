import React from "react";
import "./location-info.css";

/**
 * Location info module. Shows response data about ip geolocation
 * @param {object} param0 ip location object from ipstack
 */
const LocationInfo = ({ ipLocation }) => {
  const { loading, error, data } = ipLocation;

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : error ? (
        <div>{error.info}</div>
      ) : (
        data && (
          <ul className='list-group list-group-flush location-info-list'>
            <li className='list-group-item'>IP: {data.ip}</li>
            <li className='list-group-item'>
              Continent: {data.continent_name}
            </li>
            <li className='list-group-item'>
              Country: {data.country_name} ({data.country_code})
            </li>
            <li className='list-group-item'>
              Capital: {data.location.capital}
            </li>
            <li className='list-group-item'>City: {data.city}</li>
            <li className='list-group-item'>
              Coordinates:
              <div>lat: {data.latitude}</div>
              <div>lon: {data.longitude}</div>
            </li>
          </ul>
        )
      )}
    </>
  );
};

export default LocationInfo;
