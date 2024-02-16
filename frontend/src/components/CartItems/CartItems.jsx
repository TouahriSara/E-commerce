import React from 'react'
import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import { ShopContext } from '../../context/ShopContext';
import { useContext } from 'react';
const CartItems = () => {
    const {all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext)
  return (
   <div className="cartitems">
    <div className="cartitems-format-main">
    <p>Products</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
    </div>
    <hr />
    {all_product.map((item)=>{
        if(cartItems[item.id]>0){
            return <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={item.image} className='carticon-product-icon' />
                            <p>{item.name}</p>
                            <p>${item.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[item.id]}</button>
                            <p>${item.new_price*cartItems[item.id]}</p>
                            <img className='carticon-remove' src={remove_icon} onClick={()=>removeFromCart(item.id)} alt="" />
                        </div>
                        <hr />
                    </div>
        }
        return null;
    })}
    <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart totals </h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtatal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>

            </div>
            <button>PROCEED TO CHEKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promocode , Enter it here </p>
            <div className="cartitem-promobox">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
            </div>
        </div>
    </div>
    
   </div>
  )
}

export default CartItems