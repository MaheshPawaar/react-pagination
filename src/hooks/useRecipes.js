import { useEffect, useState } from 'react';

const useRecipes = () => {
  const limit = 5;
  const [total, setTotal] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [skip, setSkip] = useState(5);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
        setTotal(data.total);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [skip]);

  return { total, recipes, loading, skip, setSkip };
};

export default useRecipes;
