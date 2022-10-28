import {InStateDialogsType, inStateMessagesType} from "../types/types";
import {InferActionsType} from "./reduxStore";
// import {ThunkAction} from "redux-thunk";
// import {AppStateType} from "./reduxStore";


type InitialStateType = typeof initialstate;
type ActionsType = InferActionsType<typeof actions>;
// type ThunkType = ThunkAction<Promise<void>, any, AppStateType, ActionsType>


const initialstate = {

    dialogs: [
        {
            id: 1,
            avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "UserName1",
        },
        {
            id: 2,
            avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "UserName2",
        },
        {
            id: 3,
            avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "UserName3",
        },
        {
            id: 4,
            avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "UserName4",
        },
        {
            id: 5,
            avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "UserName5",
        },
        {
            id: 6,
            avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "UserName6",
        },
        {
            id: 7,
            avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "UserName7",
        },
        {
            id: 8,
            avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "UserName8",
        },
        {
            id: 9,
            avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "UserName9",
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
        case "sn/messenger/ADD-MESSAGE":
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

export const actions = {
    addMessage: (newMessageText: string) => ({
        type: "sn/messenger/ADD-MESSAGE", newMessageText} as const),
};


export default messengerPageReducer;