// questa sarà l'ultima fetta del nostro store, avrà come contenuto solamente un array
// rappresentante i libri disponibili per l'acquisto

import { GET_BOOKS, GET_BOOKS_ERROR } from '../actions'

const initialState = {
  books: [], // prima vuoto, poi si riempie con i libri arrivati dalla chiamata API
  isError: '', // all'inizio l'errore non c'è
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload, // array di 6 libri
      }

    case GET_BOOKS_ERROR:
      return {
        ...state,
        isError: action.payload,
      }

    default:
      return state
  }
}

export default shopReducer
