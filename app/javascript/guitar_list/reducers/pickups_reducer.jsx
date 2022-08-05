const SET_PICKUPS = 'SET_PICKUPS'

const pickupsReducer = (state, action) => {
 if (state === undefined) {
 // Reducer initialisation
 return [];
 }
 // TODO: handle some actions
 switch (action.type) {
  case SET_PICKUPS:
    return action.payload;
  default:
    return state;
 }
};
export default pickupsReducer;
