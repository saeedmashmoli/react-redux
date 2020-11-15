import express from 'express'
import {getPosts , createPost , updatePost , deletePost , likePost } from '../controllers/postController'

const router = express.Router()

router.get('/' , getPosts )
router.post('/create-post' , createPost )
router.patch('/:id/likePost' , likePost )
router.patch('/:id' , updatePost )
router.delete('/:id' , deletePost )


export default router;