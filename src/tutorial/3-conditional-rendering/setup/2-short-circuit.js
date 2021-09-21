import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  return (
    <>
      {text || <h1>Hello</h1>}
      <button className='btn' onClick={() => setIsError(true)}>
        Toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? <p>There is an error...</p> : <p>All right!</p>}
    </>
  );
};

export default ShortCircuit;
