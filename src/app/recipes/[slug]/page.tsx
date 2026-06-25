import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3, Gauge, Users } from "lucide-react";
import { IngredientScaler } from "@/components/ingredient-scaler";
import { RecipeCard } from "@/components/recipe-card";
import { RecipeNotes } from "@/components/recipe-notes";
import { getRecipe, recipes } from "@/lib/recipes";

type RecipePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({
  params,
}: RecipePageProps): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipe(slug);

  if (!recipe) {
    return { title: "Recipe not found" };
  }

  return {
    title: recipe.title,
    description: recipe.description,
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = getRecipe(slug);

  if (!recipe) {
    notFound();
  }

  const relatedRecipes = recipes
    .filter(
      (candidate) =>
        candidate.slug !== recipe.slug &&
        candidate.foodType === recipe.foodType,
    )
    .slice(0, 2);

  return (
    <>
      <article>
        <header className="recipe-hero">
          <div className="container recipe-hero__inner">
            <Link className="back-link" href="/#recipes">
              <ArrowLeft aria-hidden="true" size={17} />
              All recipes
            </Link>
            <p className="eyebrow">{recipe.type}</p>
            <h1>{recipe.title}</h1>
            <p className="recipe-hero__description">{recipe.description}</p>
            <div className="recipe-meta" aria-label="Recipe details">
              <span>
                <Clock3 aria-hidden="true" size={17} />
                {recipe.duration} minutes
              </span>
              <span>
                <Gauge aria-hidden="true" size={17} />
                {recipe.difficulty}
              </span>
              <span>
                <Users aria-hidden="true" size={17} />
                {recipe.baseServings} {recipe.servingLabel ?? "serving"}
                {recipe.baseServings === 1 ? "" : "s"}
              </span>
            </div>
          </div>
        </header>

        <div className="container">
          {recipe.macros ? (
            <section className="macro-grid" aria-label="Nutrition per serving">
              <div><strong>{recipe.macros.kcal}</strong><span>kcal</span></div>
              <div><strong>{recipe.macros.protein}g</strong><span>protein</span></div>
              <div><strong>{recipe.macros.fat}g</strong><span>fat</span></div>
              <div><strong>{recipe.macros.carbs}g</strong><span>carbs</span></div>
            </section>
          ) : null}

          <div className="recipe-layout">
            <aside className="recipe-layout__ingredients">
              <div className="recipe-sidebar">
                <IngredientScaler
                  baseServings={recipe.baseServings}
                  ingredients={recipe.ingredients}
                  recipeTitle={recipe.title}
                  scaleAmount={recipe.scaleAmount}
                  scaleUnit={recipe.scaleUnit}
                  scaleNote={recipe.scaleNote}
                  servingLabel={recipe.servingLabel}
                />
                <RecipeNotes recipeSlug={recipe.slug} />
              </div>
            </aside>

            <section className="method" aria-labelledby="method-heading">
              <p className="eyebrow">Method</p>
              <h2 id="method-heading">Make it step by step</h2>
              <ol className="step-list">
                {recipe.steps.map((step, index) => (
                  <li className="step-card" key={step.title}>
                    <span className="step-card__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <aside className="optional-note">
                <p className="eyebrow">Optional</p>
                <p>{recipe.optional}</p>
              </aside>
            </section>
          </div>
        </div>
      </article>

      <section className="related-section" aria-labelledby="related-heading">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Keep cooking</p>
              <h2 id="related-heading">More recipes</h2>
            </div>
            <Link className="text-link" href="/#recipes">
              View all
            </Link>
          </div>
          <div className="recipe-grid recipe-grid--related">
            {relatedRecipes.map((relatedRecipe) => (
              <RecipeCard key={relatedRecipe.slug} recipe={relatedRecipe} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
