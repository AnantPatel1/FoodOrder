 import classes from "./Checkout.module.css"
 import { useRef, useState } from "react";

 const isEmpty= value =>value.trim()==='';
 const containSixChar =  (value) => value.trim().length===6;



const Checkout = (props) =>{
  const[enterednametrue, setenterednametrue]=useState('')
  const[enteredcitytrue, setenteredcitytrue]=useState('')
  const[enteredpostaltrue, setenteredpostaltrue]=useState('')
  const[enteredstreettrue, setenteredstreettrue]=useState('')

    const[IsFormValid, setIsFormValid] = useState({
        name:true,
        street: true,
        postal: true,
        city:true
    })

    const nameInputRef= useRef();
    const StreetInputRef= useRef();
    const PostalInputRef= useRef();
    const CityInputRef= useRef();

    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName= nameInputRef.current.value;
        const eneteredStreet= StreetInputRef.current.value;
        const enteredPostal= PostalInputRef.current.value;
        const enteredCity= CityInputRef.current.value;

        const enteredNameValid = !isEmpty(enteredName);
        const enteredStreetValid = !isEmpty(eneteredStreet);
        const enteredPostalValid = containSixChar(enteredPostal);
        const enteredCityValid = !isEmpty(enteredCity);
        // const totalvalid= !isEmpty(enteredValue) || containSixChar(enteredValue);

        setIsFormValid({
            name:enteredNameValid,
            city:enteredCityValid,
            postal: enteredPostalValid,
            street: enteredCityValid
        })

       
    const formIsValid = enteredNameValid && enteredStreetValid && enteredCityValid && enteredPostalValid;

    if(!formIsValid)
    {
        return;
    }

    props.onConfirm({
      name: enteredName,
      street: eneteredStreet,
      city: enteredCity,
      postalCode: enteredPostal,
    });
      };

      const EnteredNameHandler= event =>
      {
       setenterednametrue(nameInputRef.current.value);
       
      }

      const EnteredStreetHandler= event =>
      {
       setenteredstreettrue(StreetInputRef.current.value);
       
      }
      const EnteredPostalHandler= event =>
      {
       setenteredpostaltrue(PostalInputRef.current.value);
      
      }
      const EnteredCityHandler= event =>
      {
       setenteredcitytrue(CityInputRef.current.value);
       
      }

      if(!isEmpty(enterednametrue)=== true)
      {
        IsFormValid.name= true;
      }
      if(!isEmpty(enteredstreettrue)=== true)
      {
        IsFormValid.street= true;
      }
      if(!isEmpty(enteredcitytrue)=== true)
      {
        IsFormValid.city= true;
      }
      if(containSixChar(enteredpostaltrue)=== true)
      {
        IsFormValid.postal= true;
      }




      const nameControlClasses = `${classes.control} ${
        IsFormValid.name ? '' : classes.invalid
      }`;
      const streetControlClasses = `${classes.control} ${
        IsFormValid.street ? '' : classes.invalid
      }`;
      const postalCodeControlClasses = `${classes.control} ${
        IsFormValid.postal ? '' : classes.invalid
      }`;
      const cityControlClasses = `${classes.control} ${
        IsFormValid.city ? '' : classes.invalid
      }`;

return(
    <form className={classes.form} onSubmit={confirmHandler}>
    <div className={nameControlClasses}>
    <label htmlFor="Name">Name</label>
    <input type="text" id="name" ref={nameInputRef} onChange={EnteredNameHandler}></input>
    {!IsFormValid.name && <p>Please enter a valid name!</p>}
    </div>
    <div className={streetControlClasses}>
    <label htmlFor="Street">Street</label>
    <input type="text" id="name" ref={StreetInputRef} onChange={EnteredStreetHandler}></input>
    {!IsFormValid.street && <p>Please enter a valid Street!</p>}
    </div>
    <div className={postalCodeControlClasses}>
    <label htmlFor="postal">Postal Code</label>
    <input type="text" id="name" ref={PostalInputRef} onChange={EnteredPostalHandler}></input>
    {!IsFormValid.postal && <p>Please enter a valid Postal Code(six digit)!</p>}
    </div>
    <div className={cityControlClasses}>
    <label htmlFor="City">City</label>
    <input type="text" id="name" ref={CityInputRef} onChange={EnteredCityHandler}></input>
    {!IsFormValid.city && <p>Please enter a valid City!</p>}
    </div>
    <div className={classes.actions}>
    <button type="button" onClick={props.onCancel}>Cancel</button>
    <button className={classes.submit} >Confirm</button>
    </div>
    </form>
)
}
export default Checkout;