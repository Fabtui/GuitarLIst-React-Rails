const initialState = [
{
"id": 3,
"brand": "Ibanez",
"name": "JEM77BFP",
"year": 1991,
"user_id": 1,
"created_at": "2022-08-02T14:13:16.664Z",
"updated_at": "2022-08-02T14:13:16.664Z"
},
{
"id": 2,
"brand": "Music Man",
"name": "JP6",
"year": 2001,
"user_id": 1,
"created_at": "2022-08-02T14:13:16.656Z",
"updated_at": "2022-08-02T14:13:16.656Z"
},
{
"id": 1,
"brand": "Fender",
"name": "Stratocaster",
"year": 2002,
"user_id": 1,
"created_at": "2022-08-02T14:13:16.647Z",
"updated_at": "2022-08-02T14:13:16.647Z"
}
]

const SET_GUITARS = 'SET_GUITARS'

const guitarsReducer = (state = initialState, action) => {
 if (state === undefined) {
 // Reducer initialisation
 return [];
 }
 switch (action.type) {
  case SET_GUITARS:
    console.log(action.payload);
    return action.payload;
  default:
    return state;
 }
 // TODO: handle some actions
};
export default guitarsReducer;
