import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Category = ({ strCategory, strCategoryThumb, strCategoryDescription, idCategory }) => {
  return (
    <li className='list__item'>
      <Card>
        <Card.Img variant="top" src={strCategoryThumb} alt={strCategory} />
        <Card.Body>
          <Card.Title>{strCategory}</Card.Title>
          <Card.Text>
            {strCategoryDescription.slice(0, 70)}...
          </Card.Text>
          <Link to={`/category/${idCategory}`}>Watch category</Link>
        </Card.Body>
      </Card>
    </li>
  );
};

export default Category
