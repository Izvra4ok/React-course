import {createSelector} from "reselect";
import {AppStateType} from "../reduxStore";


const getMessagesBasicSelector = (state: AppStateType) => {
    return state.messengerPage.messages;
};

export const getMessagesSelector = createSelector(getMessagesBasicSelector,
    (messages) => {
        return messages;
    });


const getDialogsBasicSelector = (state: AppStateType) => {
    return state.messengerPage.dialogs;
};

export const getDialogsSelector = createSelector(getDialogsBasicSelector,
    (dialogs) => {
        return dialogs;
    });