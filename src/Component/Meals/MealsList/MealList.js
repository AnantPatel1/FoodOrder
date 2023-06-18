import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealList.module.css';
import CartContext from '../../../Store/cart-context.js';

const MealList= (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

    // the first $ is used to print while the next ${} is a syntax, the ${} is used to inject dynamic content into it
    // the dynamic content injected here is price
    // .toFixed(2) means to give answer only till 2 decimal values , it renders only till two decimal places

    return (
        <li className={classes.meal}>
          <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
          </div>
          <div>
            <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
          </div>
        </li>
      );
    };
export default MealList;