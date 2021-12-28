const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require('method-override');
const ejs = require("ejs");
//const path = require("path");
//const Post = require("./models/Post");
const postController = require("./controllers/postControllers");
const pageController = require("./controllers/pageControllers");
//const { response } = require("express");

const app = express();

//connect DB
mongoose.connect("mongodb://localhost/cleanblog-test-db");

//Template Engine
app.set("view engine", "ejs");  

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method', {
    methods: ["POST", "GET"]
}));



//routes
app.get("/", postController.getAllPosts);
app.get("/posts/:id", postController.getPost);
app.post("/posts", postController.createPost);
app.put("/posts/:id", postController.updatePost);
app.delete("/posts/:id", postController.deletePost);


app.get("/about", pageController.getAboutPage);
app.get("/add_post", pageController.getAddPost);
app.get("/posts/edit/:id", pageController.getEditPage);


port = 3000;
app.listen(port, ()=>{
    console.log(`Sunucu ${port} de başlatıldı.`);
});
