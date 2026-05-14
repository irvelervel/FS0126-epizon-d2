// questo file non aggiunge nessuna funzionalità nuova, ma crea una struttura più robusta
// per il nostro ecosistema Redux destinato a crescere!

// per prima cosa, inseriremo una volta per tutte delle costanti come ACTION TYPES
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_USERNAME = 'SET_USERNAME'
export const GET_BOOKS = 'GET_BOOKS'
export const GET_BOOKS_ERROR = 'GET_BOOKS_ERROR'

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

// introduciamo ora una versione più potente di un normale action creator: non sarà più solamente
// una funzione che ritorna un oggetto (action), ma... una funzione che ritorna UNA FUNZIONE!
// questo grazie all'integrazione nativa in reduxtoolkit di un plugin una volta esterno che si chiama "redux-thunk"

export const getBooksAction = () => {
  // qui invece che semplicemente ritornare una action, ritornerò una SECONDA funzione
  return (dispatch, getState) => {
    // in questa funzione possiamo anche eseguire logica ASINCRONA
    fetch('https://striveschool-api.herokuapp.com/food-books')
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('errore nel recupero libri')
        }
      })
      .then((data) => {
        // qui, invece che salvare il JSON in uno stato locale, provvederemo a RISVEGLIARE il REDUCER!
        // tramite il metodo dispatch
        console.log('QUESTO È GETSTATE', getState())
        dispatch({
          type: GET_BOOKS,
          payload: data, // l'array dei libri
        })
        console.log('QUESTO È GETSTATE', getState())
      })
      .catch((error) => {
        console.log(error)
        dispatch({
          type: GET_BOOKS_ERROR,
          payload: error,
        })
      })
  }
}
