import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import classes from "./MealItem.module.css";

import { useRef, useState } from "react";

import Input from "../../UI/Input";

const MealItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.title}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${price.toFixed(2)}</div>
      </div>
      <div>
        <form className={classes.form} onSubmit={submitHandler}>
          <Input
            ref={amountInputRef}
            label="Amount"
            input={{
              id: "amount_" + props.id,
              type: "number",
              min: "1",
              max: "1",
              step: "1",
              defaultValue: "1",
            }}
          />

          <button onClick={addToCartHandler}>+ Add</button>
          {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
      </div>
    </li>
  );
};

export default MealItem;
