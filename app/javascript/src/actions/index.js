const GUITAR_API = [
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

export function setGuitars() {
 // TODO: Api call! For now, simulate a DB
  return {
    type: 'SET_GUITARS',
    payload: GUITAR_API
  }
}

export function selectGuitar(guitar) {
  return {
    type: 'SELECT_GUITAR',
    payload: guitar
  }
}
