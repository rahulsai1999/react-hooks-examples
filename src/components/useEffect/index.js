import React, { useState, useEffect } from "react";
const useEffectEx = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  const handleClick = () => {
    setCount(count + 1);
    setTime(new Date());
  };

  useEffect(() => {
    console.log("mount"); //componentDidMount
  }, []);

  useEffect(() => {
    console.log("update");
  }, [count]); //componentDidUpdate

  useEffect(() => {
    return () => {
      console.log("unmount"); //componentDidUnmount
    };
  }, []);

  return (
    <div>
      <h4>useEffect Example</h4>
      <p>Open console in this example to see changes</p>
      <div>{count}</div>
      <br />
      <button onClick={handleClick}>Increase Count</button>
      <p>{`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}</p>
    </div>
  );
};

export default useEffectEx;
