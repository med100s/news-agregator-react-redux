import { createStore, combineReducers } from 'redux'

import fontSize from './fontSize'
import theme from './theme'
import newsNumber from './newsNumber'

const reducer = combineReducers({
    theme,
    fontSize,
    newsNumber
})

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {}

const store = createStore(reducer, persistedState);

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})


export default store;