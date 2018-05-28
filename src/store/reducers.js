
/**
 * type Reducer<S, A> = (state: S, action: A) => S
 * meaning that reducer takes the old state, and an action and returns a new state;
 * Reducers should be pure functions and also be free of side-effects. This is what
 * enables exciting features like hot reloading and time travel.
 */

const initialState = {
  notes: [
    {
      id: '2636hds',
      title: 'The Legend of ZELDA',
      details: 'Breath of the wild!'
    },
    {
      id: '8383gtdb',
      title: 'Super MARIO Odyssey',
      details: 'Caps off to Mario!'
    },
    {
      id: '8383gtdb2',
      title: 'What is Next?',
      details: 'Nino Kuni for Nintendo switch!!!'
    }
  ],
  name: 'Nesa'
}

/**
 * Here we will have a function that will take the initial state,
 * returns that state,
 * and if a specific type of action is called
 *
 * So reducers basically are taking an action, returning a copy of the old state, creating a new
 * copy and adding whatever the action you have added to it
 */

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state, //returning the state
        notes: [...state.notes, action.note], //add the new note to the notes state
      }

    //'filter' always returns: a new array with the elements that pass the test.
    case 'REMOVE_NOTE': {
      return {
        ...state,
        notes: state.notes.filter(note => note !== action.note),
      }
    }

    case 'GET_NOTES': {
      return {
        ...state,
      }
    }

    default:
      return state;
  }
}