import Link from "next/link";
import { RecipeBrowser } from "@/components/recipe-browser";
import { foodTypes, recipes } from "@/lib/recipes";

export default function HomePage() {
  return (
    <div className="container">
      <section
        className="category-directory"
        aria-labelledby="food-type-heading"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Browse by ingredient</p>
            <h2 id="food-type-heading">Food types</h2>
          </div>
        </div>
        <div className="category-grid">
          {foodTypes.map((foodType) => (
            <Link
              className="category-card"
              href={`/food-types/${foodType.slug}/`}
              key={foodType.slug}
            >
              <span>{foodType.label}</span>
              <span>
                {
                  recipes.filter(
                    (recipe) => recipe.foodType === foodType.slug,
                  ).length
                }
              </span>
            </Link>
          ))}
        </div>
      </section>
      <RecipeBrowser recipes={recipes} foodTypes={foodTypes} />
    </div>
  );
}
