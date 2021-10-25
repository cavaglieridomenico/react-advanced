import React, { useState, useEffect } from 'react';

const FetchTest = () => {
  const [clock, setClock] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() =>
      setClock(new Date().toLocaleTimeString(), 1000)
    );
    return () => clearInterval(interval);
  }, [clock]);

  const [fetchData, setFetchData] = useState([]);
  const [letter, setLetter] = useState('');
  const [url, setUrl] = useState(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  );

  const resetFetchData = () => {
    setUrl('');
    console.log('reset!');
  };

  const addLetter = () => {
    setLetter('abc');
    console.log(letter);
  };

  useEffect(() => {
    console.log('fetch!');
    const getFetchData = async () => {
      const response = await fetch(`${url}${letter}`);
      const data = await response.json();
      console.log(data.drinks);
      setFetchData(data.drinks);
    };
    getFetchData();
  }, []);
  return (
    <>
      <p>{clock}</p>
      <h1>Elenco</h1>
      <button onClick={addLetter} style={{ width: '100px', height: '50px' }}>
        Add letter!
      </button>
      <button
        onClick={resetFetchData}
        style={{ width: '100px', height: '50px' }}
      >
        Reset!
      </button>
      {fetchData.map(item => (
        <p key={item.idDrink}>{item.strDrink}</p>
      ))}
    </>
  );
};

export default FetchTest;
