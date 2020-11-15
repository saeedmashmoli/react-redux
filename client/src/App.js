import React, { useEffect , useState } from 'react';
import { Container , AppBar , Grid , Grow , Typography } from '@material-ui/core'
import memories from './images/memories.png'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import useStyles from './styles';
import { useDispatch } from 'react-redux'

import { getPosts } from './actions/posts'

const App = () => {
    const [ currentId , setCurrentId ] = useState(null)
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts())
    },[dispatch])
    return (
        <Container maxWidth="lg" dir="rtl">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">خاطرات</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.main} container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                    
                </Container>
            </Grow>
        </Container>
    );
}

export default App