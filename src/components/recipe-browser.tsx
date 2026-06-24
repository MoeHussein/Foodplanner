"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { FoodType, Recipe } from "@/lib/recipes";
import { RecipeCard } from "@/components/recipe-card";

type RecipeBrowserProps = {
  recipes: Recipe[];
  foodTypes: FoodType[];
};

export function RecipeBrowser({
  recipes,
  foodTypes,
}: RecipeBrowserProps) {
  const [query, setQuery] = useState("");
  const [activeFoodType, setActiveFoodType] = useState("all");

  const filteredRecipes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return recipes.filter((recipe) => {
      const matchesFoodType =
        activeFoodType === "all" || recipe.foodType === activeFoodType;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [recipe.title, recipe.description, recipe.type, recipe.foodType]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesFoodType && matchesQuery;
    });
  }, [activeFoodType, query, recipes]);

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

        <div className="category-scroller" aria-label="Filter by food type">
          <button
            type="button"
            className="filter-chip"
            aria-pressed={activeFoodType === "all"}
            onClick={() => setActiveFoodType("all")}
          >
            All
          </button>
          {foodTypes.map((foodType) => (
            <button
              type="button"
              className="filter-chip"
              aria-pressed={activeFoodType === foodType.slug}
              key={foodType.slug}
              onClick={() => setActiveFoodType(foodType.slug)}
            >
              {foodType.label}
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
              setActiveFoodType("all");
            }}
          >
            Reset filters
          </button>
        </div>
      )}
    </section>
  );
}
