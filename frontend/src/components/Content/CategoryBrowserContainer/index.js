import { CategoryCard } from "./CategoryCard";
import { CategoryToggle } from "./CategoryToggle";
import { MoreCategoriesContainer } from "./MoreCategoriesContainer";
import "./CategoryBrowserContainer.css";

export const CategoryBrowserContainer = () => {
  return (
    <>
      <h2>Category Browser Container</h2>
      <div className="category-browser-container">
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
      </div>
      <div className="category-browser-container">
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryToggle/>
      </div>
    </>
  );
};
