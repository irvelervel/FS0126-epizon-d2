// questo file non aggiunge nessuna funzionalità nuova, ma crea una struttura più robusta
// per il nostro ecosistema Redux destinato a crescere!

// per prima cosa, inseriremo una volta per tutte delle costanti come ACTION TYPES
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_USERNAME = 'SET_USERNAME'

// ACTION CREATOR
// un ACTION CREATOR è una FUNZIONE che ritorna una ACTION
export const addToCartAction = (bookSelected) => {
  return {
    type: ADD_TO_CART,
    payload: bookSelected,
  }
}

export const removeFromCartAction = (bookId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: bookId,
  }
}

export const setUsernameAction = (nameValue) => {
  return {
    type: SET_USERNAME,
    payload: nameValue, // se volete questo payload riempito dal form potrebbe essere un intero oggetto!
  }
}
