export type Ingredient = {
  name: string;
  amount?: number;
  unit: string;
};

export type RecipeStep = {
  title: string;
  body: string;
};

export type Recipe = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  type: string;
  categories: string[];
  duration: number;
  difficulty: "Easy" | "Medium";
  baseServings: number;
  chickenGrams: number;
  macros: {
    kcal: number;
    protein: number;
    fat: number;
    carbs: number;
  };
  ingredients: Ingredient[];
  steps: RecipeStep[];
  optional: string;
};

export type Category = {
  slug: string;
  label: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "high-protein",
    label: "High protein",
    description: "Chicken-forward meals with more than 50g protein per serving.",
  },
  {
    slug: "weeknight",
    label: "Weeknight",
    description: "Straightforward recipes built for ordinary busy evenings.",
  },
  {
    slug: "meal-prep",
    label: "Meal prep",
    description: "Recipes that scale cleanly and hold up well for planned meals.",
  },
  {
    slug: "one-pan",
    label: "One pan",
    description: "Full-flavor dinners with less washing up afterward.",
  },
];

export const recipes: Recipe[] = [
  {
    slug: "teriyaki-chicken",
    title: "Glossy teriyaki chicken",
    shortTitle: "Teriyaki",
    description:
      "Golden chicken coated in a balanced soy, honey, ginger, and garlic glaze.",
    type: "Chicken",
    categories: ["high-protein", "weeknight", "meal-prep", "one-pan"],
    duration: 30,
    difficulty: "Easy",
    baseServings: 5,
    chickenGrams: 1250,
    macros: { kcal: 400, protein: 56, fat: 8, carbs: 25 },
    ingredients: [
      { name: "Chicken breast, diced", amount: 1250, unit: "g" },
      { name: "Soy sauce", amount: 120, unit: "ml" },
      { name: "Honey", amount: 113, unit: "g" },
      { name: "Rice vinegar", amount: 37, unit: "ml" },
      { name: "Garlic, minced", amount: 23, unit: "g" },
      { name: "Ginger, grated", amount: 12, unit: "g" },
      { name: "Cornstarch", amount: 16, unit: "g" },
      { name: "Cold water", amount: 30, unit: "ml" },
      { name: "Neutral oil", amount: 15, unit: "ml" },
      { name: "Black pepper", amount: 2, unit: "g" },
      { name: "Sesame seeds", amount: 10, unit: "g" },
      { name: "Green onion", amount: 15, unit: "g" },
    ],
    steps: [
      {
        title: "Mix sauce and slurry separately",
        body: "Combine soy sauce, honey, rice vinegar, garlic, ginger, and pepper in a bowl. In a separate cup, dissolve cornstarch in cold water. Keep them apart until step 4.",
      },
      {
        title: "Sear the chicken dry",
        body: "Pat every piece completely dry. Heat oil over medium-high until shimmering. Sear in batches without crowding, 3–4 minutes, turning once, until golden and just cooked through. Remove and set aside.",
      },
      {
        title: "Reduce the sauce in the same pan",
        body: "Lower to medium. Pour the full sauce into the pan so the browned chicken bits dissolve into it. Simmer for 2–3 minutes until the garlic smells cooked and the honey begins to thicken.",
      },
      {
        title: "Thicken, then coat",
        body: "Stir the slurry and pour it into the simmering sauce. Once glossy and coating a spoon, return the chicken, toss to coat, and pull the pan off the heat immediately.",
      },
      {
        title: "Garnish and serve",
        body: "Scatter sesame seeds and green onion over the chicken. Serve over rice while the glaze is still fluid.",
      },
    ],
    optional:
      "Add a few drops of toasted sesame oil off the heat for depth, or chili flakes to balance the honey.",
  },
  {
    slug: "yogurt-mustard-chicken",
    title: "Yogurt & mustard chicken",
    shortTitle: "Yogurt & mustard",
    description:
      "Tender marinated chicken with Dijon, lemon, warm cardamom, and a golden yogurt char.",
    type: "Chicken",
    categories: ["high-protein", "weeknight", "meal-prep"],
    duration: 45,
    difficulty: "Easy",
    baseServings: 5,
    chickenGrams: 1250,
    macros: { kcal: 370, protein: 54, fat: 12, carbs: 6 },
    ingredients: [
      { name: "Chicken breast, diced", amount: 1250, unit: "g" },
      { name: "Plain or Greek yogurt", amount: 240, unit: "g" },
      { name: "Dijon mustard", amount: 45, unit: "g" },
      { name: "Olive oil", amount: 30, unit: "ml" },
      { name: "Garlic, minced", amount: 30, unit: "g" },
      { name: "Lemon juice, split", amount: 15, unit: "ml" },
      { name: "Salt", amount: 9, unit: "g" },
      { name: "Black pepper", amount: 2, unit: "g" },
      { name: "Smoked paprika", amount: 8, unit: "g" },
      { name: "Coriander powder", amount: 8, unit: "g" },
      { name: "Cardamom", amount: 2, unit: "g" },
    ],
    steps: [
      {
        title: "Build the marinade",
        body: "Whisk yogurt, mustard, olive oil, garlic, half the lemon juice, salt, pepper, paprika, coriander, and cardamom until smooth.",
      },
      {
        title: "Marinate for at least 30 minutes",
        body: "Coat the chicken completely, cover, and refrigerate. The yogurt’s lactic acid tenderizes the meat, so give it time when you can.",
      },
      {
        title: "Cook in batches",
        body: "Use a hot, dry pan and arrange the chicken in a single layer. Leave it undisturbed for 3–4 minutes so the yogurt solids form a golden char, then flip and repeat.",
      },
      {
        title: "Rest off the heat",
        body: "Pull the chicken from the pan and rest it for 2 minutes. Carryover heat finishes the center without drying the edges.",
      },
      {
        title: "Finish with lemon",
        body: "Squeeze over the remaining lemon juice and taste for salt. Yogurt mutes salinity as it cooks, so a final pinch may be useful.",
      },
    ],
    optional:
      "Add a pinch of turmeric for color or serve with a cool cucumber and yogurt sauce.",
  },
  {
    slug: "creamy-chicken-curry",
    title: "Creamy chicken curry",
    shortTitle: "Creamy curry",
    description:
      "A deeply savory chicken and mushroom curry with a silky, gently spiced cream sauce.",
    type: "Chicken",
    categories: ["high-protein", "meal-prep", "one-pan"],
    duration: 45,
    difficulty: "Medium",
    baseServings: 5,
    chickenGrams: 1250,
    macros: { kcal: 520, protein: 52, fat: 28, carbs: 12 },
    ingredients: [
      { name: "Chicken breast, sliced", amount: 1250, unit: "g" },
      { name: "Fresh mushrooms", amount: 400, unit: "g" },
      { name: "Onion, chopped", amount: 1, unit: "large" },
      { name: "Garlic, minced", amount: 30, unit: "g" },
      { name: "Olive oil", amount: 30, unit: "ml" },
      { name: "Yellow curry powder", amount: 14, unit: "g" },
      { name: "Smoked paprika", amount: 5, unit: "g" },
      { name: "All-purpose flour", amount: 20, unit: "g" },
      { name: "Chicken broth", amount: 300, unit: "ml" },
      { name: "Light cooking cream", amount: 300, unit: "ml" },
      { name: "Butter", amount: 28, unit: "g" },
      { name: "Salt", amount: 9, unit: "g" },
      { name: "Black pepper", amount: 2, unit: "g" },
    ],
    steps: [
      {
        title: "Season and sear the chicken",
        body: "Toss the chicken with olive oil, half the curry powder, paprika, salt, and pepper. Sear in half the butter over medium-high heat until golden, then remove.",
      },
      {
        title: "Brown the mushrooms until dry",
        body: "Cook the mushrooms in the same pan until their water has evaporated and the edges are golden. Remove and set aside.",
      },
      {
        title: "Deglaze the pan",
        body: "Add a splash of broth and scrape up every browned bit with a wooden spoon. Those bits are concentrated flavor.",
      },
      {
        title: "Bloom spices and soften the onion",
        body: "Add the remaining butter and curry powder. Stir for 30 seconds, then add garlic and onion and cook until soft and translucent.",
      },
      {
        title: "Make the roux",
        body: "Sprinkle flour over the onions and stir constantly for 1 minute, until the raw flour smell disappears.",
      },
      {
        title: "Add broth, then cream",
        body: "Pour in the remaining broth gradually, stirring until smooth. Add the cream and keep the sauce at a gentle simmer.",
      },
      {
        title: "Combine and finish",
        body: "Return the chicken and mushrooms. Simmer on low for 3–5 minutes until the sauce is thick and glossy, then taste for salt.",
      },
    ],
    optional:
      "Add frozen peas near the end for sweetness, or lemon juice to cut through the rich sauce.",
  },
  {
    slug: "smoky-chicken-fajitas",
    title: "Smoky chicken fajitas",
    shortTitle: "Smoky fajita",
    description:
      "High-heat chicken, charred peppers, and lime with a smoky cumin and paprika spice blend.",
    type: "Chicken",
    categories: ["high-protein", "weeknight", "meal-prep", "one-pan"],
    duration: 30,
    difficulty: "Easy",
    baseServings: 5,
    chickenGrams: 1250,
    macros: { kcal: 360, protein: 53, fat: 13, carbs: 10 },
    ingredients: [
      { name: "Chicken breast, strips", amount: 1250, unit: "g" },
      { name: "Bell peppers, sliced", amount: 3, unit: "large" },
      { name: "Red or yellow onion", amount: 2, unit: "large" },
      { name: "Olive oil", amount: 45, unit: "ml" },
      { name: "Smoked paprika", amount: 12, unit: "g" },
      { name: "Ground cumin", amount: 12, unit: "g" },
      { name: "Chili powder", amount: 8, unit: "g" },
      { name: "Garlic powder", amount: 12, unit: "g" },
      { name: "Dried oregano", amount: 4, unit: "g" },
      { name: "Salt", amount: 9, unit: "g" },
      { name: "Black pepper", amount: 2, unit: "g" },
      { name: "Fresh lime juice", amount: 30, unit: "ml" },
      { name: "Fresh coriander", unit: "to taste" },
    ],
    steps: [
      {
        title: "Mix the spice blend",
        body: "Combine paprika, cumin, chili powder, garlic powder, oregano, salt, and pepper in a small bowl.",
      },
      {
        title: "Preheat the pan first",
        body: "Heat your largest skillet or wok over high heat for a full 2 minutes. A drop of water should evaporate on contact.",
      },
      {
        title: "Dry and coat right before cooking",
        body: "Pat the chicken completely dry, then toss with half the olive oil and all of the spice blend immediately before it goes into the pan.",
      },
      {
        title: "Sear without stirring",
        body: "Arrange the chicken in a single layer and leave it undisturbed for 2–3 minutes. Toss once, cook for another 1–2 minutes, then remove.",
      },
      {
        title: "Cook the vegetables separately",
        body: "Toss peppers and onions with the remaining oil and a pinch of salt. Cook in the same hot pan for 3–4 minutes until softened with some char.",
      },
      {
        title: "Combine off the heat",
        body: "Return the chicken, pull the pan from the burner, and squeeze lime juice over everything. Scatter coriander and serve immediately.",
      },
    ],
    optional:
      "Char tortillas in the same dry pan while the chicken rests, or swap some chili powder for chipotle.",
  },
];

export function getRecipe(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getRecipesByCategory(slug: string) {
  return recipes.filter((recipe) => recipe.categories.includes(slug));
}
