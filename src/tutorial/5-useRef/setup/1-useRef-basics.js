import React, { useState, useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(refContainer);
    console.log(refContainer.current);
    console.log(refContainer.current.value);
    console.log(divContainer);
    console.log(divContainer.current);
    console.log(divContainer.current.innerHTML);
  };

  useEffect(() => {
    refContainer.current.focus();
  });

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' ref={refContainer} />
        <button type='submit'>Submit </button>
      </form>
      <div ref={divContainer}>Welcome</div>
    </>
  );
};

export default UseRefBasics;
