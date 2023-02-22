import React from 'react'
import Card from "../UI/Card.js"
import classes from "./AvailableMeal.module.css"
import MealList from './MealsList/MealList.js';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sanjana',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Sanjana',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Sanjana',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Sanjana',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
 function AvailableMeal() {
    const mealslist =DUMMY_MEALS.map(meal => (
        <MealList
         key={meal.id} 
         id={meal.id}
         name={meal.name} 
         description={meal.description} 
         price={meal.price}/>));
  return (
    <section className={classes.meals}>
    <Card>
    <ul>{mealslist}</ul>
    </Card>
    </section>
  )
}
export default AvailableMeal;
