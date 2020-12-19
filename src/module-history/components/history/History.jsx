import React from "react";
import { useSelector } from "react-redux";
import HistoryEntity from "../history-entity/HistoryEntity";

const History = () => {
  const { loading, error, data } = useSelector((state) => state.history);

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : error ? (
        <div>error</div>
      ) : (
        data && (
          <ul className='list-group list-group-flush'>
            {data.map((el) => (
              <HistoryEntity key={el.id} el={el} />
            ))}
          </ul>
        )
      )}
    </>
  );
};

export default History;
