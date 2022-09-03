import {createSelector} from "reselect";


const getMessagesBasicSelector = (state) => {
    return state.messengerPage.messages;
};

export const getMessagesSelector = createSelector(getMessagesBasicSelector,
    (messages) => {
        return messages;
    });


const getDialogsBasicSelector = (state) => {
    return state.messengerPage.dialogs;
};

export const getDialogsSelector = createSelector(getDialogsBasicSelector,
    (dialogs) => {
        return dialogs;
    });