const reducer=(state,action)=>{
   if(action.type='CLEAR_CART'){
      return {...state,cart:[]};
   }

   if(action.type==='REMOVE'){
      return {
         ...state,
         cart:state.cart.filter(cartItem=>cartItem.id!==action.payload)
      }
   }

   if(action.type==='INCREASE'){
      const tempCart=state.cart.map(cartItem=>{
         if(cartItem.id===payload){
            return {
               cartItem,
               amount:cartItem.amount+1,
            }
         }
         return cartItem
      })
      return {...state,cart:tempCart}
   }
   

   if(action.type==='DECREASE'){
      const tempCart=state.cart.map(cartItem=>{
         if(cartItem.id===payload){
            return {
               ...cartItem,
               amount:cartItem.amount-1,
            }
         }
         return cartItem
      }).filter(cartItem=>cartItem.amount!==0)
      return {...state,cart:tempCart}
   }

   return state;
}

export default reducer;