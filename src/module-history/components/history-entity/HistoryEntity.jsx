import React, { useState } from "react";

/**
 * Displays entity from request's history
 * @param {object} param0 request's history object
 */
const HistoryEntity = ({el}) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <li
      className='list-group-item'
      key={el.id}
      onClick={() => setIsDisplayed(!isDisplayed)}
      style={{ userSelect: "none", cursor: "pointer" }}
    >
      {el.ip}{" "}
      <small style={{ display: `${isDisplayed ? "none" : "inline"}` }}>
        &#123; &hellip; &#125;
      </small>
      <div style={{ display: `${isDisplayed ? "block" : "none"}` }}>
        &lfloor; {el.continent_name} | {el.country_name} | {el.city}
      </div>
    </li>
  );
};

export default HistoryEntity;
