# ReactJS ip to map SPA

~~🚧 under development 🚧~~

[![IP 2 Map](/img/ip-map.jpg)](https://youtu.be/I_HUWmCNniU)
click picture above or go directly to [YT: ReactJS ip to map SPA](https://youtu.be/pzV3ptz9Nt8)

## NOTE

Due to CORS policy there's no possibility to deploy app on heroku https server and use ipstock http free plan.

Due to MPSP (my personal secure policy) there's no possibility I would share with you my private ipstock secret key 🤪

To run app on your local machine you should:
- obtain free API KEY here -> ​ https://ipstack.com/signup/free
- clone app ```git clone git@github.com:GrzegorzKossowski/ip-maps.git```
- create .env or  .env.local file in root directory (important!)
- set your local variable
```
REACT_APP_IPSTACK_KEY=your-ipstock-secret-key-here
```
- run ```npm start```

# Design requirements

## Summary

The aim of this task is to build simple web application. The application should display location of provided IP address or URL on map.

## Application specification

- SPA (Single Page Application) that communicates with a RESTful API
- You can use ​ https://ipstack.com​ for the geolocation of IP addresses and URLs ​ (you can obtain free
- For displaying location on map any kind of API can be used
- Application should be built in React, Angular or Vue (depending on the role / recruiting campaign)
- The application should be hosted somewhere - like on Heroku
- The code for this application should be in git repository

## Application UI specifications

- Landing on this application should display user IP with it’s location on the map
- Under map and IP should be search box in which you can only write IP address or URL
- If user provides a wrong IP address or URL then appropriate message should be displayed
- Using this search box you can locate searched query (IP address or URL) and display it on map below search box
- The application should store history of searched locations during session
- Any css library/framework can be used

# API

## GET

`https://api.ipstack.com/134.201.250.155?access_key=YOUR_ACCESS_KEY`

## Error Codes

### Example Error: The following error is returned if your monthly API request volume has been exceeded.

```
{
  "success": false,
  "error": {
    "code": 104,
    "type": "monthly_limit_reached",
    "info": "Your monthly API request volume has been reached. Please upgrade your plan."
  }
}
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm i`

Installs dependecies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
