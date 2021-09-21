import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h2>show/hide</h2>
      <button className='btn' onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const newWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', newWidth);
    return () => {
      window.removeEventListener('resize', newWidth);
    };
  }, []);
  return (
    <div style={{ marginTop: '40px' }}>
      <h3>Window</h3>
      <p>Size: {width} px</p>
    </div>
  );
};

export default ShowHide;
