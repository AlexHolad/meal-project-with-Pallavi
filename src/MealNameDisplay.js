import react from "react";
import { Link } from "react-router-dom";

const MealNameDisplay = ({ id, name }) => {
  return (
    <Link to={`/meals/${id}`}>
      <div>{name}</div>
    </Link>
  );
};
export default MealNameDisplay;
