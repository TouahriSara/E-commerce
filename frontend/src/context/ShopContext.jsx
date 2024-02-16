import React, { createContext } from 'react';
import all_product from '../components/Assets/all_product';
import { useState } from 'react';
// Create a context
export const ShopContext = createContext(null);
const getDefaultCart = () => {
        let cart={};
        for(let i=0;i<all_product.length + 1;i++){
            cart[i]=0;
        }
        return cart;
    }
// Create a context provider component
const ShopContextProvider = (props) => {
   const [cartItems, setCartItems] = useState(getDefaultCart());
 

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems);
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    
    
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.new_price;
            }
        }
        return totalAmount;
    }
    const getTotalCartItems=() => {
        let totalItem=0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }
      const contextValue = { all_product,cartItems , addToCart, removeFromCart,getTotalCartAmount ,getTotalCartItems};
    return (
        // Provide the context value to the components inside
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
