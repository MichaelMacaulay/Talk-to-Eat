import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core';

import useStyles from './styleCards.js'
import SingleRecipeCard from '../singleRecipeCard/SingleRecipeCard';

const infoCard = [
    { color: '#fec00e', title: 'Random recipes', info: 'Surprise surprise!', text: 'Give me some random recipes' },
    { color: '#cc0000', title: 'Recipes by ingredient', info: 'salt, chicken, steak, pepper, onions, tomatoes', text: 'Give me recipes with salt.' },
    { color: '#100e0e', title: 'Recipes by nutrient', info: 'protein, calcium, caffeine, cholesterol ', text: 'Give me recipes for my protein.' },
    { color: '#ffa100', title: 'Recipes by less', info: 'carbs, sugar, alcohol, fat', text: 'Give me recipes with less carbs.' },
];

const RecipeCards = ({ recipes }) => {
    const classes = useStyles();

    if(!recipes.length){
        return (
            <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {infoCard.map((infoCard) =>(
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                        <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                            <Typography variant="h5">{infoCard.title}</Typography>
                            <Typography variant="h6">
                                {infoCard.info}
                                </Typography>
                                <Typography variant="h6">Try saying: <br /> {infoCard.text}</Typography>
                            </div>
                    </Grid>
                ))}
            </Grid>
            </Grow>
        );
    }

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {recipes.map((recipe, i) => (
                    <Grid key={i} item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                        <SingleRecipeCard recipe={recipe} i={i} />
                    </Grid>
            ))}
        </Grid>





            
        </Grow>
    );
}

export default RecipeCards;