const SET_CENTER_PICKUP = 'SET_CENTER_PICKUP'

const setCenterPickupReducer = (state, action) => {
 if (state === undefined) {
  return null;
 }
 switch (action.type) {
   case SET_CENTER_PICKUP:
    return action.payload;
  default:
    return state;
 }
};
export default setCenterPickupReducer;
