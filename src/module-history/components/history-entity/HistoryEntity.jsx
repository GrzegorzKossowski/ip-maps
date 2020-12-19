import React, { useState } from "react";

const HistoryEntity = ({el}) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <li
      key={el.id}
      onClick={() => setIsDisplayed(!isDisplayed)}
      style={{ userSelect: "none", cursor: "pointer" }}
    >
      {el.ip}{" "}
      <small style={{ display: `${isDisplayed ? "none" : "inline"}` }}>
        &#123; &hellip; &#125;
      </small>
      <div style={{ display: `${isDisplayed ? "block" : "none"}` }}>
        &lfloor; {el.continent_name} | {el.country_name} |{" "}
        {el.location.capital}
      </div>
    </li>
  );
};

export default HistoryEntity;
