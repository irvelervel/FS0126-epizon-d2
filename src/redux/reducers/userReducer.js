// qui dentro andiamo a scrivere il "robottino" che grazie allo stato attuale e alle azioni spedite
// è in grado di far avanzare la logica di Redux
// il suo scopo è creare e mantenere lo stato di Redux
// il reducer verrà azionato AUTOMATICAMENTE da REDUX ogni volta che si effettua il dispatch di una action

import { SET_USERNAME } from '../actions'

// ogni reducer è una funzione PURA, ciò significa tra le altre cose che:
// - NON MUTA i propri parametri
// - NON effettua side-effects, chiamate API etc.
// - se fornita dello stesso input, restituisce sempre lo stesso output
// es. funzione che somma due numeri

// poichè il reducer tiene in vita lo stato dell'applicativo, dobbiamo crearne noi una versione iniziale
const initialState = {
  name: '', // inizialmente, l'utente non è loggato
}

const userReducer = (state = initialState, action) => {
  // con lo stato attuale e la action appena spedita il reducer calcolerà il nuovo stato dell'app
  // inserisco initialState come valore di default per il parametro "state": questo serve alla PRIMA
  // invocazione del mainReducer, quella che inizializza lo stato
  // cosa fa un reducer? :) calcola il nuovo stato dell'app
  // lo fa analizzando l'unica proprietà obbligatoria della action ("type") e prendendo delle decisioni in autonomia

  switch (action.type) {
    case SET_USERNAME:
      return {
        // anche qui, ritorno il nuovo stato di Redux per l'intero applicativo
        ...state,
        name: action.payload,
      }

    default:
      // anche il caso di default, come tutti gli altri, avrà lo stesso scopo: ritornare il nuovo stato dell'app!
      return state // al fine di non fare danni, in questo caso "in extremis" ritorniamo semplicemente
    // lo stato precedente! (non applichiamo nessuna modifica)
  }
}

export default userReducer
