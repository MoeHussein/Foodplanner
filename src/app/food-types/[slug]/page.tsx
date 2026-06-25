import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { RecipeCard } from "@/components/recipe-card";
import {
  foodTypes,
  getFoodType,
  getRecipesByFoodType,
} from "@/lib/recipes";

type FoodTypePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return foodTypes.map((foodType) => ({ slug: foodType.slug }));
}

export async function generateMetadata({
  params,
}: FoodTypePageProps): Promise<Metadata> {
  const { slug } = await params;
  const foodType = getFoodType(slug);

  return foodType
    ? { title: foodType.label, description: foodType.description }
    : { title: "Food type not found" };
}

export default async function FoodTypePage({ params }: FoodTypePageProps) {
  const { slug } = await params;
  const foodType = getFoodType(slug);

  if (!foodType) {
    notFound();
  }

  const matchingRecipes = getRecipesByFoodType(slug);

  return (
    <div className="listing-page">
      <header className="listing-hero">
        <div className="container">
          <Link className="back-link" href="/#recipes">
            <ArrowLeft aria-hidden="true" size={17} />
            All recipes
          </Link>
          <p className="eyebrow">Food type</p>
          <h1>{foodType.label}</h1>
          <p>{foodType.description}</p>
        </div>
      </header>
      <section
        className="container listing-content"
        aria-label={`${foodType.label} recipes`}
      >
        {matchingRecipes.length ? (
          <div className="recipe-grid">
            {matchingRecipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No {foodType.label.toLowerCase()} recipes have been added yet.</p>
            <Link className="text-link" href="/#recipes">
              Browse all recipes
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
