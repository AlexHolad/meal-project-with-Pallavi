import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MealDetailsDisplay = (props) => {
  const [mealDetail, setMealDetail] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`
      )
      .then((response) => {
        setMealDetail(response.data.meals[0]);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(mealDetail);
  return (
    <div>
      <h3>{props.match.params.id}</h3>
      <h1>{mealDetail.strMeal}</h1>
      <h5>{mealDetail.strInstructions}</h5>
    </div>
  );
};
export default MealDetailsDisplay;
