const express = require("express");

const app = express();


app.get("/", (request, responce) => {
    const blog = {
        id: 1,
        title: "Blog title",
        description: "Blog description"
    };

    responce.send(blog);
});

port = 3000;

app.listen(port, ()=>{
    console.log(`Sunucu ${port} de başlatıldı.`);
})
