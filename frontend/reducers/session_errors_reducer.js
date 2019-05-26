import { 
  RECEIVE_ERRORS, 
  RECEIVE_CURRENT_USER 
} from "../actions/session_actions";


const sessionErrorsReducer = (state = [], action) => { //this is not state, this is actually going to be state.errors.session: in the global state
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors; //session: [session errors]
    case RECEIVE_CURRENT_USER:
      return []; //session: []
    default:
      return state; // session: whatever state was passed in
  }
}

export default sessionErrorsReducer;