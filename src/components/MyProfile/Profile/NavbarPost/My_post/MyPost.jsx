import React from 'react';
import Post from "./Post/Post";
import mod from "./MyPost.module.css"
import TextareaButton from "./TextArea/TextArea";

const MyPost = () => {
    let postData = [
        {id: 1, message: "Hello", likes: 10},
        {id: 2, message: "Hi", likes: 15},
        {id: 3, message: "Good bye", likes: 25},
    ];
    const postElement = postData
        .map( p => <Post message={p.message} likes={p.likes} id={p.id}/>);
    return (
        <div className={mod.mypost}>
            <TextareaButton/>
            {postElement}
            {/*<Post message={postData[0].message} likes={postData[0].likes}/>*/}
            {/*<Post message={postData[0].message} likes={postData[0].likes}/>*/}
            {/*<Post message={postData[0].message} likes={postData[0].likes}/>*/}
            {/*<Post message={postData[0].message} likes={postData[0].likes}/>*/}

        </div>
    );
};

export default MyPost;
