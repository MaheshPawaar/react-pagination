import Pagination from './components/Pagination';
import RecipeCard from './components/RecipeCard';
import useRecipes from './hooks/useRecipes';

function App() {
  const { total, recipes, loading, skip, setSkip } = useRecipes();

  return (
    <div className="my-10 px-10">
      <div className="flex gap-10 justify-center">
        {recipes?.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
      <Pagination skip={skip} setSkip={setSkip} total={total} />
    </div>
  );
}
export default App;
