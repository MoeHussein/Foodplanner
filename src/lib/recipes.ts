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
  foodType: string;
  duration: number;
  difficulty: "Easy" | "Medium";
  baseServings: number;
  servingLabel?: string;
  scaleAmount: number;
  scaleUnit: string;
  scaleNote: string;
  macros?: {
    kcal: number;
    protein: number;
    fat: number;
    carbs: number;
  };
  ingredients: Ingredient[];
  steps: RecipeStep[];
  optional: string;
};

export type FoodType = {
  slug: string;
  label: string;
  description: string;
};

export const foodTypes: FoodType[] = [
  {
    slug: "boneless-chicken",
    label: "Boneless chicken",
    description:
      "Recipes made with boneless chicken breast or thigh, cut for quick and even cooking.",
  },
  {
    slug: "ground-meat",
    label: "Ground meat",
    description:
      "Recipes built around ground beef, lamb, chicken, or turkey for fast, versatile meals.",
  },
  {
    slug: "juices",
    label: "Juices",
    description:
      "Fresh fruit and vegetable juice recipes for simple, refreshing drinks.",
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
    foodType: "boneless-chicken",
    duration: 30,
    difficulty: "Easy",
    baseServings: 5,
    scaleAmount: 1250,
    scaleUnit: "g",
    scaleNote: "250 g raw chicken per serving",
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
    foodType: "boneless-chicken",
    duration: 45,
    difficulty: "Easy",
    baseServings: 5,
    scaleAmount: 1250,
    scaleUnit: "g",
    scaleNote: "250 g raw chicken per serving",
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
    foodType: "boneless-chicken",
    duration: 45,
    difficulty: "Medium",
    baseServings: 5,
    scaleAmount: 1250,
    scaleUnit: "g",
    scaleNote: "250 g raw chicken per serving",
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
    foodType: "boneless-chicken",
    duration: 30,
    difficulty: "Easy",
    baseServings: 5,
    scaleAmount: 1250,
    scaleUnit: "g",
    scaleNote: "250 g raw chicken per serving",
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
  {
    slug: "lemon-ginger-anti-inflammatory-shot",
    title: "Lemon ginger anti-inflammatory shot",
    shortTitle: "Lemon ginger",
    description:
      "A bright citrus wellness shot blended with fresh ginger, turmeric, and black pepper.",
    type: "Wellness shot",
    foodType: "juices",
    duration: 10,
    difficulty: "Easy",
    baseServings: 1,
    servingLabel: "batch",
    scaleAmount: 1,
    scaleUnit: "batch",
    scaleNote: "Serve in 30–60 ml portions and shake well before drinking.",
    ingredients: [
      { name: "Oranges", amount: 2, unit: "" },
      { name: "Lemons", amount: 2, unit: "" },
      { name: "Fresh ginger root", amount: 5, unit: "inches" },
      { name: "Fresh turmeric root", amount: 2, unit: "to 3 inches" },
      { name: "Black pepper", amount: 0.25, unit: "tsp" },
      { name: "Coconut water", unit: "as needed" },
    ],
    steps: [
      {
        title: "Blend until smooth",
        body: "Blend all ingredients with enough coconut water to keep the mixture moving.",
      },
      {
        title: "Strain",
        body: "Pour through a fine-mesh sieve, pressing gently to extract the liquid.",
      },
      {
        title: "Chill",
        body: "Transfer to an airtight glass container and refrigerate for up to 7 days.",
      },
    ],
    optional:
      "Wear gloves when handling fresh turmeric—it stains hands and surfaces easily.",
  },
  {
    slug: "pineapple-mint-ginger-shot",
    title: "Pineapple mint ginger shot",
    shortTitle: "Pineapple mint",
    description:
      "A tropical pineapple shot sharpened with lemon and ginger and cooled with fresh mint.",
    type: "Wellness shot",
    foodType: "juices",
    duration: 10,
    difficulty: "Easy",
    baseServings: 1,
    servingLabel: "batch",
    scaleAmount: 1,
    scaleUnit: "batch",
    scaleNote: "Serve in 30–60 ml portions and shake well before drinking.",
    ingredients: [
      { name: "Pineapple chunks", amount: 4, unit: "cups" },
      { name: "Fresh mint leaves", amount: 0.5, unit: "cup" },
      { name: "Lemon", amount: 1, unit: "" },
      { name: "Fresh ginger root", amount: 5, unit: "inches" },
      { name: "Coconut water", unit: "as needed" },
    ],
    steps: [
      {
        title: "Blend",
        body: "Blend all ingredients with enough coconut water to keep the mixture moving.",
      },
      {
        title: "Strain well",
        body: "Pass the mixture through a fine-mesh sieve for a smoother shot.",
      },
      {
        title: "Chill",
        body: "Transfer to an airtight glass container and refrigerate for up to 5–7 days.",
      },
    ],
    optional:
      "Reserve a few mint leaves and add them after blending for a fresher herbal aroma.",
  },
  {
    slug: "berry-beet-energy-shot",
    title: "Berry beet energy shot",
    shortTitle: "Berry beet",
    description:
      "An earthy-sweet blend of beet, strawberry, orange, and lemon.",
    type: "Wellness shot",
    foodType: "juices",
    duration: 10,
    difficulty: "Easy",
    baseServings: 1,
    servingLabel: "batch",
    scaleAmount: 1,
    scaleUnit: "batch",
    scaleNote: "Serve in 30–60 ml portions and shake well before drinking.",
    ingredients: [
      { name: "Beets", amount: 2, unit: "" },
      { name: "Strawberries", amount: 2, unit: "cups" },
      { name: "Lemon", amount: 1, unit: "" },
      { name: "Orange", amount: 1, unit: "" },
      { name: "Water", unit: "as needed" },
      { name: "Ashwagandha extract", unit: "optional" },
    ],
    steps: [
      {
        title: "Blend",
        body: "Blend the beets, strawberries, lemon, and orange with enough water to reach a smooth consistency.",
      },
      {
        title: "Strain",
        body: "Pass the mixture through a fine-mesh sieve.",
      },
      {
        title: "Add the optional extract",
        body: "Stir in ashwagandha extract only if you choose to use it, following its package directions.",
      },
      {
        title: "Chill",
        body: "Transfer to an airtight glass container and refrigerate for up to 5 days.",
      },
    ],
    optional:
      "Ashwagandha can interact with medications and is not suitable for everyone; check with a clinician before adding it.",
  },
  {
    slug: "turmeric-wellness-shot",
    title: "Turmeric wellness shot",
    shortTitle: "Turmeric",
    description:
      "A vivid carrot, orange, lemon, ginger, and turmeric blend with a clean citrus finish.",
    type: "Wellness shot",
    foodType: "juices",
    duration: 10,
    difficulty: "Easy",
    baseServings: 1,
    servingLabel: "batch",
    scaleAmount: 1,
    scaleUnit: "batch",
    scaleNote: "Serve in 30–60 ml portions and shake well before drinking.",
    ingredients: [
      { name: "Orange", amount: 1, unit: "" },
      { name: "Lemon", amount: 1, unit: "" },
      { name: "Carrots", amount: 3, unit: "" },
      { name: "Fresh ginger root", amount: 2, unit: "inches" },
      { name: "Fresh turmeric root", amount: 2, unit: "inches" },
      { name: "Water", unit: "as needed" },
    ],
    steps: [
      {
        title: "Blend",
        body: "Blend all ingredients with enough water to keep the mixture moving.",
      },
      {
        title: "Strain well",
        body: "Pass through a fine-mesh sieve and press gently to extract the liquid.",
      },
      {
        title: "Chill",
        body: "Transfer to an airtight glass container and refrigerate for up to 7 days.",
      },
    ],
    optional:
      "Add a small pinch of black pepper before blending if you enjoy a peppery finish.",
  },
  {
    slug: "ginger-turmeric-wellness-shot",
    title: "Ginger turmeric wellness shot",
    shortTitle: "Ginger turmeric",
    description:
      "A concentrated ginger-forward shot balanced with citrus and fresh turmeric.",
    type: "Wellness shot",
    foodType: "juices",
    duration: 10,
    difficulty: "Easy",
    baseServings: 1,
    servingLabel: "batch",
    scaleAmount: 1,
    scaleUnit: "batch",
    scaleNote: "Serve in 30–60 ml portions and shake well before drinking.",
    ingredients: [
      { name: "Water", amount: 1, unit: "cup" },
      { name: "Lemons", amount: 2, unit: "" },
      { name: "Orange", amount: 1, unit: "" },
      { name: "Fresh ginger root", amount: 1, unit: "lb" },
      { name: "Fresh turmeric root", amount: 2, unit: "inches" },
    ],
    steps: [
      {
        title: "Blend",
        body: "Blend all ingredients with the water until thoroughly broken down.",
      },
      {
        title: "Strain well",
        body: "Pass through a fine-mesh sieve, pressing gently to extract the liquid.",
      },
      {
        title: "Chill",
        body: "Transfer to an airtight glass container and refrigerate for up to 7 days.",
      },
    ],
    optional:
      "This is a particularly concentrated ginger recipe; dilute an individual serving with water if preferred.",
  },
  {
    slug: "fire-cider-wellness-shot",
    title: "Fire cider wellness shot",
    shortTitle: "Fire cider",
    description:
      "A punchy pineapple and apple cider vinegar shot with garlic, ginger, turmeric, cayenne, and lemon.",
    type: "Wellness shot",
    foodType: "juices",
    duration: 10,
    difficulty: "Easy",
    baseServings: 1,
    servingLabel: "batch",
    scaleAmount: 1,
    scaleUnit: "batch",
    scaleNote: "Serve in 30–60 ml portions and shake well before drinking.",
    ingredients: [
      { name: "Apple cider vinegar", amount: 0.5, unit: "cup" },
      { name: "Pineapple chunks", amount: 1, unit: "cup" },
      { name: "Garlic", amount: 2, unit: "to 3 cloves" },
      { name: "Fresh ginger root", amount: 2, unit: "inches" },
      { name: "Fresh turmeric root", amount: 2, unit: "inches" },
      { name: "Cayenne pepper", amount: 0.25, unit: "tsp" },
      { name: "Lemon juice", amount: 1, unit: "tbsp" },
    ],
    steps: [
      {
        title: "Blend",
        body: "Blend all ingredients until smooth.",
      },
      {
        title: "Strain well",
        body: "Pass through a fine-mesh sieve for a smoother shot.",
      },
      {
        title: "Chill",
        body: "Transfer to an airtight glass container and refrigerate for up to 4 weeks.",
      },
    ],
    optional:
      "The vinegar and cayenne are intense; dilute an individual serving with water if needed.",
  },
  {
    slug: "beet-wellness-shot",
    title: "Beet wellness shot",
    shortTitle: "Beet",
    description:
      "A simple ruby-red blend of beet, orange, lemon, and fresh ginger.",
    type: "Wellness shot",
    foodType: "juices",
    duration: 10,
    difficulty: "Easy",
    baseServings: 1,
    servingLabel: "batch",
    scaleAmount: 1,
    scaleUnit: "batch",
    scaleNote: "Serve in 30–60 ml portions and shake well before drinking.",
    ingredients: [
      { name: "Beets", amount: 2, unit: "" },
      { name: "Orange", amount: 1, unit: "" },
      { name: "Lemon", amount: 1, unit: "" },
      { name: "Fresh ginger root", amount: 2, unit: "inches" },
      { name: "Water", unit: "as needed" },
    ],
    steps: [
      {
        title: "Blend",
        body: "Blend all ingredients with enough water to reach a smooth consistency.",
      },
      {
        title: "Strain well",
        body: "Pass the mixture through a fine-mesh sieve.",
      },
      {
        title: "Chill",
        body: "Transfer to an airtight glass container and refrigerate for up to 5 days.",
      },
    ],
    optional:
      "Peel the beets for a cleaner flavor, or leave the scrubbed skin on for less prep.",
  },
  {
    slug: "energy-boosting-green-wellness-shot",
    title: "Energy boosting green wellness shot",
    shortTitle: "Green wellness",
    description:
      "A fresh green blend of apple, celery, cucumber, parsley, spinach, lemon, and matcha.",
    type: "Wellness shot",
    foodType: "juices",
    duration: 10,
    difficulty: "Easy",
    baseServings: 1,
    servingLabel: "batch",
    scaleAmount: 1,
    scaleUnit: "batch",
    scaleNote: "Serve in 30–60 ml portions and shake well before drinking.",
    ingredients: [
      { name: "Green apple", amount: 1, unit: "" },
      { name: "Celery stalks", amount: 3, unit: "" },
      { name: "Cucumber", amount: 1, unit: "" },
      { name: "Fresh parsley", amount: 0.5, unit: "cup" },
      { name: "Spinach", amount: 1, unit: "cup" },
      { name: "Coconut water", amount: 1, unit: "cup" },
      { name: "Lemon juice", amount: 1, unit: "lemon" },
      { name: "Matcha powder", amount: 0.5, unit: "tsp" },
    ],
    steps: [
      {
        title: "Blend",
        body: "Blend all ingredients until smooth.",
      },
      {
        title: "Strain if desired",
        body: "Drink as blended, or pass through a fine-mesh sieve for a smoother texture.",
      },
      {
        title: "Chill",
        body: "Transfer to an airtight glass container and refrigerate for up to 3–5 days.",
      },
    ],
    optional:
      "Matcha contains caffeine. Leave it out if you are sensitive to caffeine or serving this later in the day.",
  },
  {
    slug: "apple-cider-vinegar-wellness-shot",
    title: "Apple cider vinegar wellness shot",
    shortTitle: "Apple cider vinegar",
    description:
      "A sweet-tart pineapple and lemon shot warmed with ginger and cinnamon.",
    type: "Wellness shot",
    foodType: "juices",
    duration: 10,
    difficulty: "Easy",
    baseServings: 1,
    servingLabel: "batch",
    scaleAmount: 1,
    scaleUnit: "batch",
    scaleNote: "Serve in 30–60 ml portions and shake well before drinking.",
    ingredients: [
      { name: "Apple cider vinegar", amount: 1, unit: "tbsp" },
      { name: "Pineapple chunks", amount: 0.5, unit: "cup" },
      { name: "Lemon juice", amount: 1, unit: "lemon" },
      { name: "Fresh ginger root", amount: 1, unit: "to 2 inches" },
      { name: "Ground cinnamon", amount: 0.25, unit: "tsp" },
      { name: "Honey", amount: 1, unit: "tsp, optional" },
      { name: "Water", unit: "as needed" },
    ],
    steps: [
      {
        title: "Blend",
        body: "Blend all ingredients with enough water to reach a smooth consistency.",
      },
      {
        title: "Strain well",
        body: "Pass the mixture through a fine-mesh sieve.",
      },
      {
        title: "Chill",
        body: "Transfer to an airtight glass container and refrigerate for up to 7 days.",
      },
    ],
    optional:
      "Dilute the shot before drinking if the vinegar tastes too sharp, and avoid sipping it slowly to limit acid exposure to teeth.",
  },
];

export function getRecipe(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug);
}

export function getFoodType(slug: string) {
  return foodTypes.find((foodType) => foodType.slug === slug);
}

export function getRecipesByFoodType(slug: string) {
  return recipes.filter((recipe) => recipe.foodType === slug);
}
