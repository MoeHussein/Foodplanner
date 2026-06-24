"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { Ingredient } from "@/lib/recipes";

type IngredientScalerProps = {
  recipeTitle: string;
  ingredients: Ingredient[];
  baseServings: number;
  chickenGrams: number;
};

const MIN_SERVINGS = 1;
const MAX_SERVINGS = 12;

function formatAmount(value: number) {
  return new Intl.NumberFormat("en", {
    maximumFractionDigits: 1,
  }).format(Math.round(value * 10) / 10);
}

export function IngredientScaler({
  recipeTitle,
  ingredients,
  baseServings,
  chickenGrams,
}: IngredientScalerProps) {
  const [servings, setServings] = useState(baseServings);
  const ratio = servings / baseServings;
  const scaledChicken = (chickenGrams / baseServings) * servings;

  return (
    <section className="ingredients-card" aria-labelledby="ingredients-heading">
      <div className="ingredients-card__header">
        <div>
          <p className="eyebrow">Ingredients</p>
          <h2 id="ingredients-heading">{servings} servings</h2>
        </div>
        <div className="scaler" aria-label={`Scale ${recipeTitle} ingredients`}>
          <button
            type="button"
            className="scaler__button"
            aria-label="Decrease servings"
            disabled={servings <= MIN_SERVINGS}
            onClick={() =>
              setServings((current) => Math.max(MIN_SERVINGS, current - 1))
            }
          >
            <Minus aria-hidden="true" size={18} />
          </button>
          <output className="scaler__value" aria-live="polite">
            {formatAmount(scaledChicken)}g
          </output>
          <button
            type="button"
            className="scaler__button"
            aria-label="Increase servings"
            disabled={servings >= MAX_SERVINGS}
            onClick={() =>
              setServings((current) => Math.min(MAX_SERVINGS, current + 1))
            }
          >
            <Plus aria-hidden="true" size={18} />
          </button>
        </div>
      </div>

      <div className="ingredient-list">
        {ingredients.map((ingredient) => (
          <div className="ingredient-row" key={ingredient.name}>
            <span>{ingredient.name}</span>
            <span className="ingredient-row__amount">
              {typeof ingredient.amount === "number"
                ? `${formatAmount(ingredient.amount * ratio)}${ingredient.unit}`
                : ingredient.unit}
            </span>
          </div>
        ))}
      </div>
      <p className="ingredients-card__note">250g raw chicken per serving</p>
    </section>
  );
}
