import {InStateDialogsType, inStateMessagesType} from "../types/types";
// import {ThunkAction} from "redux-thunk";
// import {AppStateType} from "./reduxStore";


const ADD_MESSAGE = "socialNetwork/profilePageReducer/ADD-MESSAGE";

export type InitialStateType = typeof initialstate;
type ActionsType = addMessageActionType
// type ThunkType = ThunkAction<Promise<void>, any, AppStateType, ActionsType>

const initialstate = {

    dialogs: [
        {
            id: 1,
            avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            first: "UserName1",
            last: "UserLastName1",
        },
        {
            id: 2,
            avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            first: "UserName2",
            last: "UserLastName2",
        },
        {
            id: 3,
            avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            first: "UserName3",
            last: "UserLastName3",
        },
        {
            id: 4,
            avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            first: "UserName4",
            last: "UserLastName4",
        },
        {
            id: 5,
            avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            first: "UserName5",
            last: "UserLastName5",
        },
        {
            id: 6,
            avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            first: "UserName6",
            last: "UserLastName6",
        },
        {
            id: 7,
            avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            first: "UserName7",
            last: "UserLastName7",
        },
        {
            id: 8,
            avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            first: "UserName8",
            last: "UserLastName8",
        },
        {
            id: 9,
            avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            first: "UserName9",
            last: "UserLastName9",
        },
    ] as Array<InStateDialogsType>,

    messages: [
        {id: 1, message: "Hi"},
        {
            id: 2,
            message: "Hello!#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;"
        },
        {id: 3, message: "Good bye"},
        {id: 4, message: "How are you?"},
        {id: 5, message: "Hello! I'm fine and you?"},
    ] as Array<inStateMessagesType>
};

const messengerPageReducer = (state: InitialStateType = initialstate, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = action.newMessageText;
            if (newMessage === "") return state;
            return {
                ...state,
                messages: [...state.messages, {
                    id: 6, message: newMessage,
                }]
            };
        default:
            return state;
    }
};

type addMessageActionType = {
    type: typeof ADD_MESSAGE, newMessageText: string, };

export const addMessage = (newMessageText: string): addMessageActionType => ({
    type: ADD_MESSAGE, newMessageText});


export default messengerPageReducer;