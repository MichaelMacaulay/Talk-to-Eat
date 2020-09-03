import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import RecipeCards from './components/RecipeCards/RecipeCards'

// Key from Alan AI integrations dashboard.
const alanKey = '98cb0e4e89d4fdce7eee60c74bb2b0542e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    // Initialize state & set default status to an empty array. This way, we can put all our fetched recipes inside this empty array to be displayed.
    const [foodRecipes, setFoodRecipes] = useState([]);

useEffect(() => {
    alanBtn({
        key: alanKey,
        onCommand: ({ command, data }) => {
            if(command === 'newRecipes') {
                setFoodRecipes(data);
            }
        }
    })
}, [])



    return(
        <div>
            <h1>Alan AI</h1>
            <RecipeCards data={foodRecipes} />
        </div>
    );
}

export default App;