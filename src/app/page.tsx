import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { RecipeBrowser } from "@/components/recipe-browser";
import { foodTypes, recipes } from "@/lib/recipes";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container">
          <p className="eyebrow">Plan less. Cook better.</p>
          <h1>Practical recipes built for real weeks.</h1>
          <p className="home-hero__intro">
            Clear steps, adjustable quantities, and high-protein dinners that
            are easy to return to.
          </p>
          <div className="home-hero__actions">
            <Link className="primary-button" href="/#recipes">
              Browse recipes
              <ArrowDown aria-hidden="true" size={17} />
            </Link>
            <span className="home-hero__count">
              {recipes.length} recipes · {foodTypes.length}{" "}
              {foodTypes.length === 1 ? "food type" : "food types"}
            </span>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="category-directory" aria-labelledby="food-type-heading">
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
    </>
  );
}
