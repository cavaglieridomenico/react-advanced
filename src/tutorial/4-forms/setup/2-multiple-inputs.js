import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person, setPerson] = useState({
    firstName: '',
    email: '',
    age: '',
  });
  const [people, setPeople] = useState([]);

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setPerson(currentPerson => ({ ...currentPerson, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople(currentPeople => [...currentPeople, newPerson]);
      setPerson(currentPerson => ({
        ...currentPerson,
        id: '',
        firstName: '',
        email: '',
        age: '',
      }));
    } else {
      console.log('No empty string, please');
    }
  };

  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Age : </label>
            <input
              type='age'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, age, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <h5>{age}</h5>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
