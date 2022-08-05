const SET_NECK_PICKUP = 'SET_NECK_PICKUP'

const setNeckPickupReducer = (state, action) => {
 if (state === undefined || action.payload === undefined) {
  return null;
 }
 switch (action.type) {
   case SET_NECK_PICKUP:
    return action.payload;
  default:
    return state;
 }
};
export default setNeckPickupReducer;
