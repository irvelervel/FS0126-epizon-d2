// questo file sarà responsabile della creazione del Redux Store, il cervellone centralizzato
// dove verranno salvati i dati a livello dell'applicativo

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from '../reducers/cartReducer'
import userReducer from '../reducers/userReducer'
import shopReducer from '../reducers/shopReducer'
// combineReducers è una funzione che accetta tanti reducers (che gestiscono le "fette")
// e ve ne ritorna uno unico (la "torta")

const mainReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  shop: shopReducer,
})

const store = configureStore({
  reducer: mainReducer, // inserisco il reducer scritto in reducers/index.js
})
// "store" è proprio il Redux Store

// un reducer è una funzione pura che calcola il nuovo stato applicativo di Redux
// lo riesce a fare grazie allo stato precedente + la action che è stata appena "dispatchata"
export default store
