const Post = require("../models/Post");

exports.getAboutPage = (request, response) => {
    response.render("about");
};

exports.getAddPost = (request, response) => {
    response.render("add_post");
};

exports.getEditPage = async (request, response) => {
    const post = await Post.findOne({ _id: request.params.id });
    response.render("edit", {
        post,
    });
};