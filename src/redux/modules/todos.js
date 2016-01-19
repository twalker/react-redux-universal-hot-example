const ADD_TODO = 'redux-example/todos/ADD_TODO';

const initialState = [
  {id: 0, text: 'find where to generate ids'}
];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_TODO:
      return [ ...state, {id: Date.now(), text: action.text } ];
    default:
      return state;
  }
}

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}
