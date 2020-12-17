import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const History = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const { loading, error, data } = useSelector((state) => state.history);

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : error ? (
        <div>error</div>
      ) : (
        data && (
          <ul className='list-group list-group-flush locinfo-list'>
            {data.map((el) => (
              <li
                key={el.id}
                onClick={() => setIsDisplayed(!isDisplayed)}
                style={{ userSelect: "none", cursor: "pointer" }}
              >
                {el.ip}{" "}
                <small
                  style={{ display: `${isDisplayed ? "none" : "inline"}` }}
                >
                  &#123; &hellip; &#125;
                </small>
                <div style={{ display: `${isDisplayed ? "block" : "none"}` }}>
                  &lfloor; {el.continent_name} | {el.country_name} |{" "}
                  {el.location.capital}
                </div>
              </li>
            ))}
          </ul>
        )
      )}
    </>
  );
};

export default History;

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
