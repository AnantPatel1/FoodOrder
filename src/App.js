import { useState } from 'react';
import "./App.css"
import Header from './Component/Layout/Header.js';
import Meals from "./Component/Meals/Meals.js"
import Cart from "./Component/Cart/Cart.js"
import CartProvider from './Store/Cart-provider';

function App() {
  const [CardShown, isCardShown]= useState(false);

const ShowCartHandler = () =>{
  isCardShown(true);
}
const HideCartHandler = () =>{
  isCardShown(false);
}
  return (
    <CartProvider>
    {CardShown && <Cart onClose={HideCartHandler}/>}
      <Header onShowCart ={ShowCartHandler}/>
      <main>
      <Meals />
      </main>
    </CartProvider>
  );
}

export default App;