import React, { useState, useEffect } from 'react';
const Timer = () => {
  const [value, setValue] = useState(100);
  useEffect(() => {
    const timer = setInterval(() => setValue(value - 1), 1000);
    return () => clearInterval(timer);
  }, [value]);
  return (
    <>
      <h3>{value}</h3>
    </>
  );
};
export default Timer;
