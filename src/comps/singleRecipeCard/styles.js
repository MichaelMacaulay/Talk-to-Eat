import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
media: {
    display: 'block',
    height: 250,
    width: 'fill',
    marginLeft: 'auto',
    marginRight: 'auto',

},
border: {
    border: 'solid',
    borderShadow: 1,
},
fullHeightCard: {
    height: '100%',
    width: '100%'
},
card: {
    display: 'grid',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'space-evenly',
    borderBottom: '10px solid white',
    marginLeft: 'auto',
    marginRight: 'auto',
},

grid: {
    display: 'center',
},

title: {
    padding: '0 16px',
    textAlign: 'center',
},
cardActions: {
    padding: '8px 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
},
});
