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

   if(action.type==='GET_TOTALS'){
      const {amount,total}=state.cart.reduce((cartTotal,cartItem)=>{
         const {price,amount}=cartItem;
         const total=price*amount;

         cartTotal.total+=total;
         cartTotal.amount+=amount;
         return cartTotal;
      },{
         amount,
         total,
      })
      total=parseFloat(total,toFixed(2));
      return {...state,total,amount}
   }

   return state;
}

export default reducer;