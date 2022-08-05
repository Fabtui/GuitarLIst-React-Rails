export function setGuitars() {
 // TODO: Api call! For now, simulate a DB
 const promise = fetch('/api/v1/guitars')
  .then(response => response.json());
  return {
    type: 'SET_GUITARS',
    payload: promise
  }
}

export function selectGuitar(guitar) {
  return {
    type: 'SELECT_GUITAR',
    payload: guitar
  }
}

export function setPickups() {
 const promise = fetch('/api/v1/pickups')
  .then(response => response.json());
  return {
    type: 'SET_PICKUPS',
    payload: promise
  }
}
