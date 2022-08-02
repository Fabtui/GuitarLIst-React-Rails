const guitarsReducer = (state, action) => {
 if (state === undefined) {
 // Reducer initialisation
 return [];
 }
 switch (action.type) {
  case 'SET_GUITARS':
    console.log(action.payload);
    return action.payload;
  default:
    return state;
 }
 // TODO: handle some actions
};
export default guitarsReducer;
