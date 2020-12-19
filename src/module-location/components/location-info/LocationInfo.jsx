import React from "react";
import "./location-info.css";

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

// const plDummyData = {
//   ip: "87.206.166.163",
//   type: "ipv4",
//   continent_code: "EU",
//   continent_name: "Europe",
//   country_code: "PL",
//   country_name: "Poland",
//   region_code: "MZ",
//   region_name: "Mazovia",
//   city: "\u015ar\u00f3dmie\u015bcie",
//   zip: "00-025",
//   latitude: 52.2317008972168,
//   longitude: 21.018339157104492,
//   location: {
//     geoname_id: 758470,
//     capital: "Warsaw",
//     languages: [
//       {
//         code: "pl",
//         name: "Polish",
//         native: "Polski",
//       },
//     ],
//     country_flag: "http://assets.ipstack.com/flags/pl.svg",
//     country_flag_emoji: "\ud83c\uddf5\ud83c\uddf1",
//     country_flag_emoji_unicode: "U+1F1F5 U+1F1F1",
//     calling_code: "48",
//     is_eu: true,
//   },
// };
