import React from 'react';
import Post from "./Post/Post";
import mod from "./MyPost.module.css"
import TextareaButton from "./TextArea/TextArea";

const MyPost = () => {
    let postData = [
        {id: 1, message: "Hello! What's new?", likes: 10, first: "Sergey", last: "Barzakouski",},
        {id: 2, message: "Hi, how are you my friend?", likes: 15, first: "Alina", last: "Grigas",},
        {id: 3, message: "Good bye bro", likes: 25, first: "Denis", last: "Barzakouski",},
    ];
    const postElement = postData
        .map(p => <Post message={p.message} likes={p.likes} id={p.id} first={p.first} last={p.last}/>);
    return (
        <div className={mod.mypost}>
            <TextareaButton/>
            {postElement}
        </div>
    );
};

export default MyPost;
