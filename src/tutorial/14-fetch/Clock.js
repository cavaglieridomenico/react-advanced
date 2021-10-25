import React, { useState, useEffect } from 'react';
const Clock = () => {
  const [clock, setClock] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() =>
      setClock(new Date().toLocaleTimeString(), 1000)
    );
    return () => clearInterval(interval);
  }, [clock]);
  return <h3>{clock}</h3>;
};
export default Clock;
