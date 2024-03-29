import React,{ useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../Store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const [isCheckout, setisCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {

    cartCtx.addItem({...item, amount : 1});
  };
  const OrderHandler = () =>{
    setisCheckout(true);
  }

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch('https://react-http-6b4a6.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const ModalActions = <div className={classes.actions}>
  <button className={classes['button--alt']} onClick={props.onClose} >
    Close
  </button>
  {hasItems && <button className={classes.button} onClick={OrderHandler}>Order</button>}
</div>

const modalcontent = <React.Fragment>{cartItems}
<div className={classes.total}>
  <span>Total Amount</span>
  <span>{totalAmount}</span>
</div>
{isCheckout &&  <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
{!isCheckout && ModalActions} </React.Fragment>

const isSubmittingModalContent = <p>Sending order data...</p>;

const didSubmitModalContent = (
  <React.Fragment>
    <p>Successfully sent the order!</p>
    <div className={classes.actions}>
    <button className={classes.button} onClick={props.onClose}>
      Close
    </button>
  </div>
  </React.Fragment>
);

  return (
    <Modal onClose={props.onClose}>
    {!isSubmitting && !didSubmit && modalcontent}
    {isSubmitting && isSubmittingModalContent}
    {!isSubmitting && didSubmit && didSubmitModalContent}
      
    </Modal>
  );
};

export default Cart;