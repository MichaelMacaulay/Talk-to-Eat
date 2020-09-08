import React from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import useStyles from './styles.js'




// Setting up the component.
// Note how I destructured title & image etc from recipe. This is to not have to pass in recipe.title or recipe.image to access them.
const SingleRecipeCard = ({recipe,  i}) => {

    const classes = useStyles();

    // {title, image, id, url },



    // This will be the structure of the recipe card returned after making a result.
    // Making use of material UI.
    return (
        <Card className={classes.card}>
            <CardActionArea target="_blank" href={'http://www.google.com/search?q=' + recipe.title + '+recipe' }>
                <CardMedia className={classes.media} href={'http://www.google.com/search?q=' + recipe.title + '+recipe' } image={recipe.image} />
                    <Typography className={classes.title} gutterBottom variant="h5">{recipe.title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p"></Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" href={'http://www.google.com/search?q=' + recipe.title + '+recipe' } >Learn More</Button>
                <Typography variant="h5" color="textSecondary" >{i + 1}</Typography>
            </CardActions>
        </Card>
    );
}

export default SingleRecipeCard;