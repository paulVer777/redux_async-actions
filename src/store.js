import {createStore, combineReducers,compose,applyMiddleware} from 'redux'
import counter from './state/counter'
import customers from './state/customers'
import thunk from 'redux-thunk'

const reducer = combineReducers({

    counter,
    customers
})




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)