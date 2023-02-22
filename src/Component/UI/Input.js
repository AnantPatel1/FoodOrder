import React from "react";
import classes from "./Input.module.css"
const Input = React.forwardRef((props , ref) =>{
    return <div className={classes.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    
    <input  ref={ref} {...props.input}/>
    
    </div>
    // ...props.input ensures that all the key value pairs which we received in this input object are added as props  to this input object
    // for example if the props.input gives type="text" as an object then ...props.input ensures that it is added
    // we expect an input data which is an object for configurational data for the id, like for example id
});
export default Input;