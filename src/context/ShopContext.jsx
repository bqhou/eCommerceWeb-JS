import React,{createContext, useState} from 'react'
import all_product from '../components/assets/all_product'

export const ShopContext=createContext(null)
const getDefaultCart=()=>{
    let cart={}
    for (let index=0; index<all_product.length+1; index++){
            cart[index]=0
    }
    return cart

}

const ShopContextProvider=(props)=>{

    
    const [cartItems,setCartItems]=useState(getDefaultCart())
    

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if (cartItems[item]>0){
                let itemInfo=all_product.find((product)=>product.id===Number(item))
                totalAmount+= itemInfo.new_price * cartItems[item]
            }
            return totalAmount
        }
    }

    const getTotalCartItems=()=>{
        let totalItems=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItems+=cartItems[item]
            }
            return totalItems
        }
    }

    const contextValue={getTotalCartItems,all_product,cartItems, getTotalCartAmount,addToCart,removeFromCart}
        // console.log(cartItems)

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider