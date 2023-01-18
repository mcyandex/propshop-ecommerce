import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer,productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer  } from './reducers/userReducers'

const reducer= combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,
    cart : cartReducer ,
    userLogin : userLoginReducer,
    userRegister : userRegisterReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')?
JSON.parse(localStorage.getItem('cartItems')) :[]

const UserInfoFromStorage = localStorage.getItem('userInfo')?
JSON.parse(localStorage.getItem('userInfo')) : null

const intialState= {
    cart: {cartItems: cartItemsFromStorage},
    userLogin : {userInfo: UserInfoFromStorage}
}

const middleware= [thunk]

const store = createStore(reducer, intialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store