import './App.css';

import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import MainScreenComponent from './Components/MainScreenComponent';
import SingleRecipe from './Components/SingleRecipe';
import MealTypeList from './Components/MealTypeList';
import RecipeList from './Components/RecipeList';
import { SelectFavoriteProvider } from './Context/FavoriteRecipe';
import FavoriteRecipesList from './Components/FavoriteRecipesList';
import { CurrentPageProvider } from './Context/CurrentPage';
import { ShoppingListProvider } from './Context/ShoppingListContext';
import ShoppingList from './Components/ShoppingList';

function App() {
  return (
    <SelectFavoriteProvider>
      <CurrentPageProvider>
        <ShoppingListProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MainScreenComponent />} />
              <Route path="random-recipe/:id" element={<SingleRecipe />} />
              <Route path="meal-types/:category" element={<MealTypeList />} />
              <Route path="favorite" element={<FavoriteRecipesList />} />
              <Route path="favorite/:id" element={<SingleRecipe />} />
              <Route path="shopping-list" element={<ShoppingList />} />
              <Route path="shopping-list/:id" element={<SingleRecipe />} />
              <Route
                path="meal-types/:category/:meal_type"
                element={<RecipeList />}
              />
              <Route
                path="meal-types/:category/:meal_type/:id"
                element={<SingleRecipe />}
              />
              <Route path="search/:input" element={<RecipeList />} />
              <Route path="*" element={<div>Page not found. Error 404</div>} />
            </Route>
          </Routes>
        </ShoppingListProvider>
      </CurrentPageProvider>
    </SelectFavoriteProvider>
  );
}

export default App;
