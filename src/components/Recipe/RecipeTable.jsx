import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RecipeTable = ({ recipe = {} }) => {
  const getRecipe = (meal) => {
    return Object.keys(meal)
      .filter((key) => meal[key] && key.startsWith('strIngredient'))
      .reduce((acc, key) => {
        let index = parseInt(key.slice(-2));
        if (!index) {
          index = parseInt(key.slice(-1));
        }
        const measureKey = `strMeasure${index}`;
        const targetMeasure = meal[measureKey];
        acc[meal[key]] = targetMeasure;
        return acc;
      }, {});
  };

  return (
    <>
     {Object.entries(recipe).length > 0 && 
      <Container>
        {
          Object.entries(getRecipe(recipe))
          .map(([key, value]) => {
            return (
              <Row key={key}>
                <Col>{key}</Col>
                <Col>{value}</Col>
              </Row>
            );
          })
        }
      </Container>
     }
    </>
  );
};

export default RecipeTable;
