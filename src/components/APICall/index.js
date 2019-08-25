import React, { Component, useState, useEffect } from "react";
import Axios from "axios";

const dataURL = "https://tv-v2.api-fetch.website/movie/tt2139881";

const APICall = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    Axios.get(dataURL).then(response => {
      const { data } = response;
      setData(data);
    });
  });

  return (
    <div>
      <h3>{data.title}</h3>
      <h4>{data.year}</h4>
    </div>
  );
};

export default APICall;
