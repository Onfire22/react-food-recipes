import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Meal = ({ strMeal, strMealThumb, idMeal }) => {
  return (
    <li className='list__item'>
      <Card data-bs-theme="dark">
        <Card.Img variant="top" src={strMealThumb} alt={strMeal} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Link className='category_link' to={`/meal/${idMeal}`}>Watch recipe</Link>
        </Card.Body>
      </Card>
    </li>
  )
};

export default Meal;
