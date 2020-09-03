intent('What does this app do?', 'What can I do here?', 
    reply('This is a news project.'));

const API_KEY = '5bbb18fdb40448fb9616981523158126';
let savedRecipes = [];



// const exampleURL = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2';


// Recipe by ingredient
intent('Give me a recipe with $(ingredient* (.*))', (p) => {
    let FOOD_API_URL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}`;
    
    if(p.ingredient.value) {
        FOOD_API_URL = `${FOOD_API_URL}&ingredients=${p.ingredient.value.toLowerCase()}`
    }
    
    
    // This is what the URL will look like. It works when I paste it into the web browser and search by itself.
//     const hardCodedURL = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=5bbb18fdb40448fb9616981523158126&ingredients=chicken';
    
    api.request(FOOD_API_URL, (error, response, body) => {
        const data = JSON.parse(body);
        if(!data.length) {
            p.play('Sorry, please try searching for something else.');
            return;
        }
        
        savedRecipes = data;
        
        p.play({ command: 'newRecipes', data });
        p.play(`Here are the (best|yummiest) ${p.ingredient.value} recipes.`);

    });
})