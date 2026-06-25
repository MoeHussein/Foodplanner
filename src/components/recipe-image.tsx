import Image from "next/image";
import type { Recipe } from "@/lib/recipes";

type RecipeImageProps = {
  recipe: Pick<Recipe, "image" | "imageAlt">;
  priority?: boolean;
  sizes: string;
};

const basePath = process.env.NODE_ENV === "production" ? "/Foodplanner" : "";

export function RecipeImage({
  recipe,
  priority = false,
  sizes,
}: RecipeImageProps) {
  return (
    <Image
      alt={recipe.imageAlt}
      fill
      priority={priority}
      sizes={sizes}
      src={`${basePath}${recipe.image}`}
    />
  );
}
