const Post = require("../models/Post");

exports.getAllPosts = async (request, response) => {
    /*     const blog = {
            id: 1,
            title: "Blog title",
            description: "Blog description"
        };
        responce.send(blog); */
    //responce.sendFile(path.resolve(__dirname, "temp/index.html"));
    const posts = await Post.find({}).sort("-dateCreated");
    response.render("index", {
        posts
    });  //EJS modülü kullanıldığı için
};

exports.getPost = async (request, response) => {
    const post = await Post.findById(request.params.id);
    response.render("post", {
        post
    });
};

exports.createPost = async (request, response) => {
    await Post.create(request.body);
    response.redirect("/");
};

exports.updatePost = async (request, response) => {
    const post = await Post.findOne({ _id: request.params.id });
    post.title = request.body.title;
    post.detail = request.body.title;
    post.description = request.body.description;
    post.save();
    response.redirect(`/posts/${request.params.id}`);
};

exports.deletePost = async (request, response) => {
    await Post.findByIdAndRemove(request.params.id);
    response.redirect("/");
};

