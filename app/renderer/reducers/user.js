import { handleActions } from 'redux-actions';
import actions from '../actions/user';

const INITIAL_STATE = {
  loggedIn:false
};

const Reducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case "USER_LOGIN":
      return{
        ...state,
        ...action.payload
      }
    case "USER_LOGOUT":
      return{
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default Reducer;
// export default handleActions(
//   {
//     [actions.login]: (state, action) => {
//       return { ...state, ...action.payload };
//     },
//     [actions.logout]: (state, action) => {
//       return { ...state, ...action.payload };
//     },
//   },
//   {},
// );
