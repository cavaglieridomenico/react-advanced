import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);
  const handleSubmit = event => {
    event.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      setPeople(currentPeople => {
        return [...currentPeople, person];
      });
    } else {
      console.log('No empty string, please');
    }
    setFirstName('');
    setEmail('');
  };
  return (
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='firstName'>Name : </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email : </label>
          <input
            type='text'
            id='email'
            name='email'
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <button type='submit'>Add person</button>
      </form>
      <div className='container'>
        {people.map(el => {
          const { id, firstName, email } = el;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default ControlledInputs;
