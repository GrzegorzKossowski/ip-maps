import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getSearchIp } from "../../../redux/search/search-actions";

import "./search-form.css";

const initialValid = {
  valid: false,
  focused: false,
};

const SearchForm = () => {
  const [searchedIp, setSearchedIp] = useState("87.206.166.163");
  const [isIpValid, setIsIpValid] = useState(initialValid);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const val = e.target.value;
    setSearchedIp(val);

    // uncomment to validate only IP numbers
    const ipRGEX = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (val !== "" && ipRGEX.test(val)) {
      console.log("valid");
      setIsIpValid({ ...isIpValid, valid: true });
    } else {
      console.log("invalid");
      setIsIpValid({ ...isIpValid, valid: false });
    }
    /*
     */
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submited");
    setSearchedIp("");
    setIsIpValid(initialValid);
    if (isIpValid.valid) {
      dispatch(getSearchIp(searchedIp));
    }
  };

  return (
    <form onSubmit={submitHandler} className='d-flex align-items-baseline'>
      <div>
        <input
          className={isIpValid ? "valid" : "invalid"}
          type='text'
          value={searchedIp}
          onChange={handleChange}
          onFocus={() => setIsIpValid({ ...isIpValid, focused: true })}
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
