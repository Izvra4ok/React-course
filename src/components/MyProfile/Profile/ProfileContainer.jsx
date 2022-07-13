import React from 'react';
import About from "./About_me/AboutInform/About";
import Post from "./My_post/Post/Post";
import StoreContext from "../../../storeContext";
import Profile from "./Profile";


const ProfileContainer = () => {

    return <StoreContext.Consumer>

        {(store) => {

            let state = store.getState().profilePage;

            let aboutmeStateMap = state.aboutme
                .map(info => <About id={info.id} name={info.name} birthday={info.birthday} country={info.country}
                                    degree={info.university} web={info.website}/>)

            let postStateMap = state.posts
                .map(p => <Post message={p.message} likes={p.likes} id={p.id} first={p.first} last={p.last}/>);

            return <Profile aboutmeStateMap={aboutmeStateMap}
                            postStateMap={postStateMap}
                            newPostText={state.newPostText}/>
        }}
    </StoreContext.Consumer>
}
export default ProfileContainer;