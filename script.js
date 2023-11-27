const api_key = "58854e5cc9fa4e4dba4c80fc03c84278";
const recipeListElement = document.getElementById("recipe-list");

function displayRecipe(recipes){
    recipeListElement.innerHTML = "";
    recipes.forEach((recipe) => {

        const recipeItemElement =document.createElement("li");
        recipeItemElement.classList.add("recipe-item");

        const recipeImageElement = document.createElement("img");
        recipeImageElement.src = recipe.image;
        recipeImageElement.alt = "recipe image";
        recipeItemElement.appendChild(recipeImageElement);

        const recipeTitleElement = document.createElement("h2");
        recipeTitleElement.innerText= recipe.title;
        recipeItemElement.appendChild(recipeTitleElement);

        const recipeIngredientsElement =document.createElement("p");
        console.log(recipe.extendedIngredients);
        recipeIngredientsElement.innerHTML = `<strong>Ingredients</strong> ${recipe.extendedIngredients.map((ingredient)=>ingredient.original).join(", ")}`;
        recipeItemElement.appendChild(recipeIngredientsElement);

        const recipeLinkElement =document.createElement("a");
        recipeLinkElement.href = recipe.sourceUrl;
        recipeLinkElement.innerText ="View Recipe";
        recipeLinkElement.target="_blank";
        recipeItemElement.appendChild(recipeLinkElement);

        recipeListElement.appendChild(recipeItemElement);
    });
}

async function getRecipes(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=7&apiKey=${api_key}`);
    const data = await response.json();
    return data.recipes;
}


async function init(){
    const recipes = await getRecipes();
    displayRecipe(recipes);
}

init();
