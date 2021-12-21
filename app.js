const express = require("express");
const ejs = require("ejs");
const path = require("path");

const { response } = require("express");

const app = express();

app.use(express.static('public'));

app.set("view engine", "ejs");  //Template Engine

app.get("/", (request, response) => {
/*     const blog = {
        id: 1,
        title: "Blog title",
        description: "Blog description"
    };
    responce.send(blog); */
    //responce.sendFile(path.resolve(__dirname, "temp/index.html"));
    response.render("index");  //EJS modülü kullanıldığı için
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


port = 3000;

app.listen(port, ()=>{
    console.log(`Sunucu ${port} de başlatıldı.`);
});
