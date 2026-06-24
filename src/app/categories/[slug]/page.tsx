import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { RecipeCard } from "@/components/recipe-card";
import {
  categories,
  getCategory,
  getRecipesByCategory,
} from "@/lib/recipes";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  return category
    ? { title: category.label, description: category.description }
    : { title: "Category not found" };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const categoryRecipes = getRecipesByCategory(slug);

  return (
    <div className="listing-page">
      <header className="listing-hero">
        <div className="container">
          <Link className="back-link" href="/#recipes">
            <ArrowLeft aria-hidden="true" size={17} />
            All recipes
          </Link>
          <p className="eyebrow">Category</p>
          <h1>{category.label}</h1>
          <p>{category.description}</p>
        </div>
      </header>
      <section className="container listing-content" aria-label={`${category.label} recipes`}>
        <div className="recipe-grid">
          {categoryRecipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  );
}
