import profilePageReducer, {actions} from "./profilePageReducer";
import {PostsType, ProfileType} from "../types/types";


const state= {

    profile: null as  ProfileType | null,
    status: "",
    posts: [
        {
            id: 1,
            avatarUrl: "https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
            message: "Hello! What's new?",
            likes: 10,
            first: "UserName",
            last: "UserLastName",
        },
        {
            id: 2,
            avatarUrl: "https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
            message: "Hi, how are you my friend?",
            likes: 15,
            first: "UserName",
            last: "UserLastName",
        },
        {
            id: 3,
            avatarUrl: "https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
            message: "Good bye bro",
            likes: 25,
            first: "UserName",
            last: "UserLastName",
        },
        {
            id: 4,
            avatarUrl: "https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
            message: "Good bye bro",
            likes: 25,
            first: "UserName",
            last: "UserLastName",
        },
        {
            id: 5,
            avatarUrl: "https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
            message: "Good bye bro",
            likes: 25,
            first: "UserName",
            last: "UserLastName",
        },
    ] as Array<PostsType>

};

test('new post should be added', () => {

    // 1.Test data
    let action = actions.addPost("Test added post ")
    //2.Action
    let newState = profilePageReducer(state,action);
    //3.expect
    expect(newState.posts.length).toBe(6)
});


test('checking data in Post', () => {

    // 1.Test data
    let action = actions.addPost("Good bye bro")
    //2.Action
    let newState = profilePageReducer(state,action);
    //3.expect
    expect(newState.posts[4].message).toBe("Good bye bro")
});


test("after deleting length of posts should be decrement", () => {
    // 1.Test data
    let action = actions.deletePost(1);
    //2. Action
    let newState = profilePageReducer(state,action);
    //3. expect
    expect(newState.posts.length).toBe(4);

})