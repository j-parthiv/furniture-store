import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  console.log(cart)
  if (cart){
    console.log(cart)
    return JSON.parse(cart)
  }else{
    return []
  }
}


const initialState = {
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
    shipping_fee: 534,
  }


const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState) 

  // add to cart
  const addToCart = (id, color, amount, product) => {
    dispatch({type: ADD_TO_CART, payload:{id, color, amount, product}})
    console.log(color)
  }


  // remove item
  const removeItem = (id) =>{
    dispatch({type: REMOVE_CART_ITEM, payload: id})
  }
  //toogle amount
  const toogleAmount = (id, value) =>{}
  // clear cart
  const clearCart = () =>{
    dispatch({type: CLEAR_CART})
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
    console.log(state)
  }, [state.cart])

  return (
    <CartContext.Provider value={{...state, addToCart, removeItem, toogleAmount, clearCart}}>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
