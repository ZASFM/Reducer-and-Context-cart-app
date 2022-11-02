import React,{useState,useEffect,useContext,useReducer} from 'react';
import cartItems from './data'
import reducer from './reducer'


const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState={
  loading:false,
  cart:cartItems,
  total:0,
  amount:0,
}

const AppProvider=({children})=>{
   const [state,dispatch]=useReducer(reducer,initialState);

   const clearCart=()=>{
      dispatch({type:'CLEAR_CART'})
   }

   const remove=(id)=>{
      dispatch({type:'REMOVE',payload:id,})
   }

   const increase=(id)=>{
      dispatch({type:'INCREASE',payload:id,})
   }   

   const decrease=(id)=>{
      dispatch({type:'INCREASE',payload:id,})
   } 

   useEffect(()=>{
      dispatch({type:'GET_TOTALS'})
   },[state.cart])

   const fetchData=async ()=>{
      dispatch({type:'LOADING'})
      const resp=await fetch(url)
      const cart=resp.json();
      dispatch({type:'DISPLAY_ITEMS',payload:cart})
   }

   useEffect(()=>{
      fetchData();
   },[])

   return (
      <AppContext.Provider
         value={{
            ...state,
            clearCart,
            remove,
            increase,
            decrease,
         }}
      >
         {children}
      </AppContext.Provider>
   )
}

//Custom hook:
export const useGlobalContext=()=>{
   return useContext(AppContext)
}

export {AppContext,AppProvider}