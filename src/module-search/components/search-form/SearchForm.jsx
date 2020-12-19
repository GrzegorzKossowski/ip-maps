import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { getSearchIp } from "../../../redux/search/search-actions";

import "./search-form.css";

const initialValid = {
  valid: true,
  focused: false,
};

/**
 * Search form component
 */
const SearchForm = () => {
  const [searchedIp, setSearchedIp] = useState("");
  const [isIpValid, setIsIpValid] = useState(initialValid);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const val = e.target.value;
    setSearchedIp(val);

    /*
    // uncomment to validate only IP numbers
    // change initialValid.validate to false
    
    const ipRGEX = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (val !== "" && ipRGEX.test(val)) {
      console.log("valid");
      setIsIpValid({ ...isIpValid, valid: true });
    } else {
      console.log("invalid");
      setIsIpValid({ ...isIpValid, valid: false });
    }
    */
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setSearchedIp("");
    setIsIpValid(initialValid);
    if (isIpValid.valid) {
      dispatch(getSearchIp(searchedIp));
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className='d-flex align-items-baseline justify-content-evenly'
    >
      <div className=''>
        <input
          className={`search-form-input ${isIpValid ? "valid" : "invalid"}`}
          type='text'
          value={searchedIp}
          onChange={handleChange}
          onFocus={() => setIsIpValid({ ...isIpValid, focused: true })}
          placeholder="ipv4, ipv6 or domain name"
        />
        {!isIpValid && (
          <div>
            <small>Incorrect IP address</small>
          </div>
        )}
      </div>
      <button
        className='btn btn-primary'
        type='submit'
        disabled={!isIpValid.valid}
      >
        submit
      </button>
    </form>
  );
};

export default SearchForm;
