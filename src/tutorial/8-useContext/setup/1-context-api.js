import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PersonContex = React.createContext();

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = id => {
    setPeople(people => {
      return people.filter(person => person.id !== id);
    });
  };
  return (
    <PersonContex.Provider value={{ people, removePerson }}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContex.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContex);
  console.log(mainData); //{people: Array(4), removePerson: ƒ}
  return (
    <>
      {mainData.people.map(person => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContex);
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
