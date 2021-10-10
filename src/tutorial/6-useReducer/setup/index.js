import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { reducer } from './reducer';
// reducer function

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = event => {
    event.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </div>
        <button type='submit'>add</button>
      </form>

      {state.people.map(person => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button
              className='button'
              onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: id })}
            >
              x
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
