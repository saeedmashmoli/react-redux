import axios from 'axios';

const url = 'https://myreact-rudux.herokuapp.com/posts';


export const fetchPosts = async () => await axios.get(url)
export const createPost = async (newPost) => await axios.post(`${url}/create-post` , newPost)
export const updatePost = async (id , updatePost ) => await axios.patch(`${url}/${id}` , updatePost)
export const deletePost = async (id) => await axios.delete(`${url}/${id}`)
export const likePost = async (id) => await axios.patch(`${url}/${id}/likePost`)