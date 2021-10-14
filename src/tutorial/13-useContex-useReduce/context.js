import React, { useContext, useReducer } from 'react';
import reducer from './reducer';

const AppContext = React.createContext();

const defaultState = {
  name: '',
  people: [],
  isModalOpen: false,
  modalContent: '',
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleonChange = value => {
    dispatch({ type: 'NAME_VALUE', payload: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (state.name) {
      const newItem = { id: new Date().getTime().toString(), name: state.name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      dispatch({ type: 'EMPTY_FIELD' });
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  const removeItem = id => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <AppContext.Provider
      value={{ state, handleonChange, handleSubmit, removeItem, closeModal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
