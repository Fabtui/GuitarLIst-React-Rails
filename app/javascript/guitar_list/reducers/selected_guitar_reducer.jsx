const SELECT_GUITAR = 'SELECT_GUITAR'

const selectedGuitarReducer = (state, action) => {
 if (state === undefined) {
  return null;
 }
 switch (action.type) {
   case SELECT_GUITAR:
    return action.payload;
  default:
    return state;
 }
};
export default selectedGuitarReducer;
