import React from 'react';
/* eslint-disable */

const Meal = ({ meals }) => (
  <li key={meals.id}>
    <div className="image">
    </div>
    <div>
    {meals.meal}
    </div>
  </li>
);
export default Meal;
