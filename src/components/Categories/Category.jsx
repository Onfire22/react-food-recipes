import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Category = ({ strCategory, strCategoryThumb, strCategoryDescription }) => {
  return (
    <li className='list__item'>
      <Card data-bs-theme="dark">
        <Card.Img variant="top" src={strCategoryThumb} alt={strCategory} />
        <Card.Body>
          <Card.Title>{strCategory}</Card.Title>
          <Card.Text>
            {strCategoryDescription.slice(0, 70)}...
          </Card.Text>
          <Link className='category_link' to={`/category/${strCategory}`}>Watch {strCategory} Category</Link>
        </Card.Body>
      </Card>
    </li>
  );
};

export default Category
