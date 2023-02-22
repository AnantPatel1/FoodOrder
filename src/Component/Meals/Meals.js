import React, { Fragment } from 'react'
import AvailableMeal from './AvailableMeal';
import MealsSummary from './MealSummary';
 function Meals() {
  return <Fragment>
  <MealsSummary />
  <AvailableMeal />
  </Fragment>
}
export default Meals;
