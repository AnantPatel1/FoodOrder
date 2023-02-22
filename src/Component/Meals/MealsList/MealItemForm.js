import { useRef , useState} from "react"
import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input.js"


const MealItemForm = (props) =>{
    const [AmountisValid, SetAmountisValid] = useState(true);

    const amountInputRef= useRef();

    const SubmitHandler = event =>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        // eneterAmount is always an String
         const enteredAmountNumber = +enteredAmount;
        //  eneterAmountNumber is in integer.. 
         if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5)
         {
            SetAmountisValid(false);
            return;
         }
         props.onAddToCart(enteredAmountNumber);
    } ;

    return <form className={classes.form} onSubmit={SubmitHandler}>
    <Input 
    ref= {amountInputRef}
    label="Amount"
    input={{
        id:'amount',
        type:'number',
        min:1,
        max:5,
        step:1,
        defaultValue:1
    }}
    />
    <button>+ Add</button>
    {!AmountisValid && <p>Invalid Input, please enter the amount between 1 to 5</p>}
    </form>
}
export default MealItemForm;