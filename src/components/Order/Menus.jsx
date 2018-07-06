import React from 'react';
import Meal from './Meal';
/* eslint-disable */

const renderMeal = (currentMeal) => (
  currentMeal.map(meal => <Meal meals={meal} key={meal.id} />)
);

const Menus = ({ match, data }) => {
  const menus = data.find(meals => meals.date === match.params.date);
  let mainMeal;
  let firstAccompaniment;
  let secondAccompaniment;
  if (menus) {
    mainMeal = menus.meal.main;
    firstAccompaniment = menus.meal.accompaniment1;
    secondAccompaniment = menus.meal.accompaniment2;
  }
// console.log(menus.meal.main);

  return (
    <div>
      <div className="menus-container">
        <div className="main-meal">
          <h3> Main Meal</h3>
          <ul>
            { (mainMeal) ? renderMeal(mainMeal) : '' }
          </ul>
        </div>
        <div className="accomp-1">
          <h3>Accompaniment 1</h3>
          { (firstAccompaniment) ? renderMeal(firstAccompaniment) : '' }
        </div>
        <div className="accomp2">
          <h1>Accompaniment 2</h1>
          { (secondAccompaniment) ? renderMeal(secondAccompaniment) : '' }
        </div>
      </div>
    </div>
  )
}

export default Menus;