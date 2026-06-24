"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { Category, Recipe } from "@/lib/recipes";
import { RecipeCard } from "@/components/recipe-card";

type RecipeBrowserProps = {
  recipes: Recipe[];
  categories: Category[];
};

export function RecipeBrowser({
  recipes,
  categories,
}: RecipeBrowserProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredRecipes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return recipes.filter((recipe) => {
      const matchesCategory =
        activeCategory === "all" ||
        recipe.categories.includes(activeCategory);
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [recipe.title, recipe.description, recipe.type]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query, recipes]);

  return (
    <section className="browse-section" id="recipes" aria-labelledby="recipes-heading">
      <div className="browse-section__heading">
        <div>
          <p className="eyebrow">Recipe library</p>
          <h2 id="recipes-heading">Find your next dinner</h2>
        </div>
        <p className="result-count" aria-live="polite">
          {filteredRecipes.length}{" "}
          {filteredRecipes.length === 1 ? "recipe" : "recipes"}
        </p>
      </div>

      <div className="browse-tools">
        <label className="search-field">
          <Search aria-hidden="true" size={19} strokeWidth={1.6} />
          <span className="sr-only">Search recipes</span>
          <input
            type="search"
            placeholder="Search recipes"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {query ? (
            <button
              type="button"
              className="icon-button"
              aria-label="Clear search"
              onClick={() => setQuery("")}
            >
              <X aria-hidden="true" size={18} />
            </button>
          ) : null}
        </label>

        <div className="category-scroller" aria-label="Filter by category">
          <button
            type="button"
            className="filter-chip"
            aria-pressed={activeCategory === "all"}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              type="button"
              className="filter-chip"
              aria-pressed={activeCategory === category.slug}
              key={category.slug}
              onClick={() => setActiveCategory(category.slug)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {filteredRecipes.length ? (
        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No recipes match that search yet.</p>
          <button
            className="text-button"
            type="button"
            onClick={() => {
              setQuery("");
              setActiveCategory("all");
            }}
          >
            Reset filters
          </button>
        </div>
      )}
    </section>
  );
}
