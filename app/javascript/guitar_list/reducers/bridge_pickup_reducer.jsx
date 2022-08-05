const SET_BRIDGE_PICKUP = 'SET_BRIDGE_PICKUP'

const setBridgePickupReducer = (state, action) => {
 if (state === undefined) {
  return null;
 }
 switch (action.type) {
   case SET_BRIDGE_PICKUP:
    return action.payload;
  default:
    return state;
 }
};
export default setBridgePickupReducer;
