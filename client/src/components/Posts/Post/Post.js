import React from 'react'
import moment from 'moment'
import { Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import Delete from '@material-ui/icons/Delete'
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import useStyles from './styles'
import { useDispatch} from 'react-redux';
import { deletePost , likePost } from '../../../actions/posts'
const Post = ({post , setCurrentId}) => {
    const dispatch = useDispatch()
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6" style={{fontFamily : 'Vazir'}}>{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color : 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" style={{fontFamily : 'Vazir'}}>
                    {post.tags.map((tag) => `#${tag} `)}
                </Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography style={{fontFamily : 'Vazir'}} color="textSecondary" component="p" variant="body2">{post.message}</Typography>
            </CardContent>
            <CardContent>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAlt fontSize="small" />
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button  style={{ float : "left" }} size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <Delete fontSize="small" />
                    Delete 
                </Button>
            </CardContent>
        </Card>
    )
}
export default Post