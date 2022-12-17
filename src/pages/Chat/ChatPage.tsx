import React from "react";
import {Field, Form, Formik} from "formik";
import mod from "../../components/Messenger/Messages/TextareaFormMessage/TextareaFormMessages.module.css";
import Avatar from "@mui/material/Avatar/Avatar";
import userDefaultFoto from "../../assets/images/userDefaultAvatar.webp";


const webSocket = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")

const ChatPage: React.FC = () => {
    return (
        <Chat/>
    )
};

type ChatType = {};

const Chat: React.FC<ChatType> = React.memo(() => {
    return (
        <div>
            <ChatMessages/>
            <AddChatMessagesForm/>
        </div>
    )
});


const ChatMessages: React.FC<any> = React.memo((props) => {

    const chatMessages = [1, 2, 3, 4, 5,6,7,8,9,10]
    return (
        <div style={{height: "400px",overflowY: "auto"}}>
            {chatMessages.map((message: any) => <div key={message}>
                <Message/>
            </div>)}
        </div>
    )
});

const Message: React.FC<any> = React.memo((props) => {

    const chatMessage = {
        urlAvatar: null,
        author: "Sergey",
        text: "Hello"
    };

    return (
        <div>
            <div style={{display:"flex", flexDirection:"row",alignItems:"center"}}>
                <Avatar alt={chatMessage.author}
                           src={chatMessage.urlAvatar ? chatMessage.urlAvatar : userDefaultFoto}/>
                <b>{chatMessage.author}</b>
            </div>
            <div>{chatMessage.text}</div>
        </div>

    )

});


type TextareaFormMessagesType = {
    newChatMessageText: string,
};


const AddChatMessagesForm: React.FC = React.memo((props) => {
    const initialValues: TextareaFormMessagesType = {
        newChatMessageText: "",
    };

    const addMessage = (newMessageText: string) => {
        // props.onAddMessageClick(newMessageText)
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, onSubmitProps) => {
                    addMessage(values.newChatMessageText);
                    onSubmitProps.resetForm()
                }}>

                <Form>
                    <div className={mod.form}>
                        <label htmlFor="textarea"/>
                        <Field className={mod.areatext}
                               name="newChatMessageText"
                               id="textarea"
                               placeholder="Enter your post"/>
                        {/*<ErrorMessage name="textarea">*/}
                        {/*    {errorMsg => <div className={mod.formErrors}>{errorMsg}</div>}*/}
                        {/*</ErrorMessage>*/}

                        <button className={mod.button}
                                type="submit">Submit
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
});


export default ChatPage;