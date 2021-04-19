import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:7000'})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = ` ${JSON.parse(localStorage.getItem('profile')).token}`;
    console.log(req.headers.Authorization)
    }
  
    return req;
  });
export const signIn =(formData) => axios.post('http://localhost:7000/user/login',formData);
export const signUp =(formData) => axios.post('http://localhost:7000/user/register',formData);

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const fetchUsers = () => API.get('/admin');
export const deleteUser = (id) => API.delete(`/admin/${id}`);
