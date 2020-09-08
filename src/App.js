import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import talktoeatlogo from './images/talktoeatlogo.jpg';
import { Typography } from '@material-ui/core';

import RecipeCards from './comps/recipeCards/RecipeCards'
import useStyles from './appStyles.js';

// Key from Alan AI integrations dashboard.
const alanKey = '98cb0e4e89d4fdce7eee60c74bb2b0542e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    // Initialize state & set default status to an empty array. This way, we can put all our fetched recipes inside this empty array to be displayed.
    const [foodRecipes, setFoodRecipes] = useState([]);
    // Call the styles function so it makes this page nice af.
    const classes = useStyles();

useEffect(() => {
    alanBtn({
        key: alanKey,
        onCommand: ({ command, recipes }) => {
            if(command === 'newRecipesCommand') {
                console.log(recipes);
                setFoodRecipes(recipes);
            } else {
                console.log(recipes.recipes);
                setFoodRecipes(recipes.recipes)
            }
        }
    })
}, [])






    return(
        <div>
            <div className={classes.logoContainer}>
                    <img src={talktoeatlogo} className={classes.talktoeatlogo} alt="Talk to Eat logo" href="https://talktoeat.netlify.app/"/>
            </div>
            <RecipeCards recipes={foodRecipes} />

            {!foodRecipes.length ? (

<div className={classes.footer}> 
<Typography variant="body1" component="h2">Created by <a className={classes.link} href="https://msmacaulay.com/">
    Michael Macaulay</a>
        </Typography>
        </div>
            ) : null}

            


        </div>


        
        );
}

export default App;