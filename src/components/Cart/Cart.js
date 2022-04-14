
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';


const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalprice = useSelector((state) => state.cart.totalPrice);
  
  const dispatch = useDispatch();

  const enteredAmount = `$${totalprice.toFixed(2)}`;

  const enteredAmountNumber = +enteredAmount;

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const cartItem = (
    <ul className={classes['cart-items']}>
      {cartItems.map((item) => (
        <CartItem
        key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      {/* {console.log("cartItem.id")}
      {console.log(cartItems[0].id)} */}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${(Math.abs(totalprice)).toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={toggleCartHandler}>
          Close
        </button>
         <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
