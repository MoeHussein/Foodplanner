import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { RecipeBrowser } from "@/components/recipe-browser";
import { categories, recipes } from "@/lib/recipes";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container">
          <p className="eyebrow">Plan less. Cook better.</p>
          <h1>Chicken recipes built for real weeks.</h1>
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
              {recipes.length} recipes · {categories.length} categories
            </span>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="category-directory" aria-labelledby="category-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Browse by need</p>
              <h2 id="category-heading">Recipe categories</h2>
            </div>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <Link
                className="category-card"
                href={`/categories/${category.slug}/`}
                key={category.slug}
              >
                <span>{category.label}</span>
                <span>
                  {
                    recipes.filter((recipe) =>
                      recipe.categories.includes(category.slug),
                    ).length
                  }
                </span>
              </Link>
            ))}
          </div>
        </section>
        <RecipeBrowser recipes={recipes} categories={categories} />
      </div>
    </>
  );
}
