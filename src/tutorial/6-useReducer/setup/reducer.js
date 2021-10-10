export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added',
    };
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'please enter value',
    };
  }
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
      modalContent: '',
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      people: state.people.filter(person => person.id !== action.payload),
      isModalOpen: true,
      modalContent: 'item removed',
    };
  }
  throw new Error('no action with that name!');
};
