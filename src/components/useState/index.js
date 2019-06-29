import React, { useState } from "react";

const useStateEx = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  const handleClick = () => {
    setCount(count + 1);
    setTime(new Date());
  };

  return (
    <div>
      <h4>useState example</h4>
      <div>{count}</div>
      <br />
      <button onClick={handleClick}>Increase Count</button>
      <p>{`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}</p>
    </div>
  );
};

export default useStateEx;
