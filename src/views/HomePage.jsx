import React, { useEffect } from "react";
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
    <div className='container main'>
      <div className='row' style={{ height: "100%" }}>
        <div className='col-md-3 border order-md-0 order-1 my-3 my-md-0' style={{overflow: 'auto'}}>
          <History />
        </div>
        <div className='col-md-9 order-md-1 order-0'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 order-md-0 order-1 '>
                <Map ipLocation={userLocation} />
              </div>
              <div className='col-md-6 order-md-1 order-0 '>
                <h3>Your current IP location</h3>
                <LocationInfo ipLocation={userLocation} />
              </div>
            </div>
            <div className='row py-3'>
              <div className='col-lg-6 offset-lg-3'>
                <SearchForm />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 order-md-0 order-1'>
                <Map ipLocation={searchLocation} />
              </div>
              <div className='col-md-6 order-md-1 order-0'>
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
