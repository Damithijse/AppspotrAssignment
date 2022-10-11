const INITIAL_STATE = {
  list:[],
  visible: false,
  searchList: [],
  selectedItem: [],
  score1: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_LIST':
      return {...state, list: action.payload};
    case 'SET_VISIBILITY':
      return {...state, visible: action.payload};
    case 'SET_SELECTED_ITEM':
      return {...state, selectedItem: action.payload};
    case 'SET_SEARCH_ITEM':
      return {...state, searchList: action.payload};
    default:
      return state;
  }
};
