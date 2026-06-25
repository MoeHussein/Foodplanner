import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import type { Recipe } from "@/lib/recipes";

type RecipeCardProps = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="recipe-card">
      <Link className="recipe-card__link" href={`/recipes/${recipe.slug}/`}>
        <div className="recipe-card__topline">
          <span className="eyebrow">{recipe.type}</span>
          <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.5} />
        </div>
        <div className="recipe-card__body">
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
        </div>
        <div className="recipe-card__meta">
          <span>
            <Clock3 aria-hidden="true" size={15} />
            {recipe.duration} min
          </span>
          <span>
            {recipe.macros
              ? `${recipe.macros.protein}g protein`
              : `${recipe.baseServings} ${recipe.servingLabel ?? "serving"}${recipe.baseServings === 1 ? "" : "s"}`}
          </span>
        </div>
      </Link>
    </article>
  );
}
