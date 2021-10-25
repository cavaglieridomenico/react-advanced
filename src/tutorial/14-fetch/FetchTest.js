import React, { useState, useEffect, useCallback } from 'react';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const FetchTest = () => {
  const [fetchData, setFetchData] = useState([]);
  const [letter, setLetter] = useState('');

  const addLetter = () => {
    setLetter('abc');
  };

  const getFetchData = useCallback(async () => {
    const response = await fetch(`${url}${letter}`);
    const data = await response.json();
    setFetchData(data.drinks);
  }, [letter]);

  useEffect(() => {
    console.log('fetch!');
    getFetchData();
  }, [getFetchData]);
  return (
    <>
      <h1>Elenco</h1>
      <button onClick={addLetter} style={{ width: '100px', height: '50px' }}>
        Add letter!
      </button>
      {fetchData.map(item => (
        <p key={item.idDrink}>{item.strDrink}</p>
      ))}
    </>
  );
};
export default FetchTest;
