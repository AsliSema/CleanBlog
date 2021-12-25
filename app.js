const express = require("express");
const mongoose = require("mongoose");

const ejs = require("ejs");
const path = require("path");

const Post = require("./models/Post");

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



//routes
app.get("/", async (request, response) => {
/*     const blog = {
        id: 1,
        title: "Blog title",
        description: "Blog description"
    };
    responce.send(blog); */
    //responce.sendFile(path.resolve(__dirname, "temp/index.html"));
    const posts = await Post.find();
    response.render("index", {
        posts
    });  //EJS modülü kullanıldığı için
});

app.get("/posts/:id", async (request, response) => {
    const post = await Post.findById(request.params.id);
    response.render("post", {
        post
    });
});

app.get("/about", (request, response) => {
    response.render("about");
});

app.get("/add_post", (request, response) => {
    response.render("add_post");
});

app.get("/post", (request, response) => {
    response.render("post");
});

app.post("/posts", async (request, response) => {
    await Post.create(request.body);
    response.redirect("/");
});


port = 3000;

app.listen(port, ()=>{
    console.log(`Sunucu ${port} de başlatıldı.`);
});
