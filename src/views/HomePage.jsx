import React, { useEffect, useState } from "react";
import LocationInfo from "../module-location/components/location-info/LocationInfo";
import Map from "../module-maps/components/Map";
import History from "../module-history/components/history/History";

import { useDispatch, useSelector } from "react-redux";
import { getUserIp } from "../redux/location/location-actions";
import SearchForm from "../module-search/components/search-form/SearchForm";

const HomePage = () => {
  const dispatch = useDispatch();
  const userLocation = useSelector((state) => state.userLocation);
  const searchLocation = useSelector((state) => state.searchLocation);

  useEffect(() => {
    dispatch(getUserIp());
    return () => {
      // cleanup
    };
  }, [dispatch]);

  return (
    <div className='container border main'>
      <div className='row border' style={{ height: "100%" }}>
        <div className='col-md-3 border'>
          <History />
        </div>
        <div className='col-md-9'>
          <div className='container'>
            <div className='row'>
              <div className='col border'>
                <Map ipLocation={userLocation} />
              </div>
              <div className='col border'>
                <LocationInfo ipLocation={userLocation} />
              </div>
            </div>
            <div className='row'>
              <div className='col border'>
                <SearchForm />
              </div>
            </div>
            <div className='row'>
              <div className='col border'>
                <Map ipLocation={searchLocation} />
              </div>
              <div className='col border'>
                <LocationInfo ipLocation={searchLocation} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
