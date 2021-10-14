import React from 'react';
import Modal from './Modal';
import { useGlobalContext } from './context';

const TodoList = () => {
  const { state, handleonChange, handleSubmit, removeItem, closeModal } =
    useGlobalContext();
  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form
        className='form'
        onSubmit={event => {
          handleSubmit(event);
        }}
      >
        <div>
          <input
            type='text'
            value={state.name}
            onChange={event => handleonChange(event.target.value)}
          />
        </div>
        <button type='submit'>add</button>
      </form>
      {state.people.map(person => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button className='button' onClick={() => removeItem(id)}>
              x
            </button>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
