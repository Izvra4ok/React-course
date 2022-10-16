import React from "react";
import mod from "./Messenger.module.css";
import Dialogs from "./Dialogues/Dialogs";
import Messages from "./Messages/Messages";
import {useDispatch, useSelector} from "react-redux";
import {getDialogsSelector, getMessagesSelector} from "../../Redux/selectors/messengerPageSelectors";
import {actions} from "../../Redux/messengerPageReducer";
import ErrorBoundary from "../common/ErrorBoundary";
import {ErrorMsg} from "../common/ErrorMsg";


export const Messenger: React.FC = React.memo((props) => {

    const dispatch = useDispatch();
    const messages = useSelector(getMessagesSelector);
    const dialogs = useSelector(getDialogsSelector);

    const onAddMessageClick = (newMessageText: string)=> {
        dispatch(actions.addMessage(newMessageText))
    };

    return (
        <ErrorBoundary ErrorComponent={ErrorMsg}>
        <section className={mod.messenger}>
            <Dialogs dialogs={dialogs} />
            <Messages messages={messages}
                      onAddMessageClick={onAddMessageClick}/>
        </section>
        </ErrorBoundary>
    )
});

