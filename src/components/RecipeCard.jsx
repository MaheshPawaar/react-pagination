import PropTypes from 'prop-types';

const RecipeCard = ({ name, image, rating, ingredients }) => {
  return (
    <div className="w-[250px] h-[400px] overflow-hidden">
      <div className="overflow-hidden rounded-top-left-xl">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <div className="font-bold">
        {name} ({rating})
      </div>
      <div>
        {ingredients.map((item, index) => {
          return (
            <p className="text-xs text-gray-400" key={index}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  rating: PropTypes.string.isRequired,
};

export default RecipeCard;