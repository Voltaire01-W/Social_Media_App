const functions = require("firebase-functions");

const app = require("express")();

const FBAuth = require('./util/fbauth');

const { 
    getAllPosts,
    postOnePost, 
    getPost, 
    commentOnPost } = require('./handlers/posts');
const { 
    signup, 
    login, 
    uploadImage, 
    addUserDetails, 
    getAuthenticatedUser } = require('./handlers/users');

// Post routes
app.get("/posts", getAllPosts);
app.post("/post", FBAuth, postOnePost);
app.get('/post/:postId', getPost);
// TODO:
// Delete Post
// Like a post
// Unlike a post
app.post('/post/:postId/comment', FBAuth, commentOnPost);

// User routes
app.post("/signup", signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);

exports.api = functions.https.onRequest(app);