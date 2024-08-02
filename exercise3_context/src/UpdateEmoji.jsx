import { useState } from "react";
import {EmojiProvider, useEmojiContext} from '../context/EmojiContext';

export function UpdateEmoji() {

    // destructure the context values passed via useEmojiContext custom hook
    const{currentEmoji, handleUpdateEmoji} = useEmojiContext();

    //would you do the actual setting of the emoji's in the context or in this component like it is?
    //could keep it here to keep the context focused on updating the state and keep the updateEmoji component
    //focussed on changing the emojis
    const handleMoodChange = () => {
        let newEmoji = currentEmoji;
        if (currentEmoji == '😊')
            newEmoji = '☹';
        else if (currentEmoji == '☹')
            newEmoji = '😍';
        else if (currentEmoji == '😍')
            newEmoji = '😊';

        handleUpdateEmoji(newEmoji);
    }

    return (
        <div className="emojiChanger">
            <div>
                <p>Current Emoji updating from UpdateEmoji:</p>
            <span role="img" aria-label="happy" style={{fontSize: '50px'}}>{currentEmoji}</span>
            </div><br></br>

            <button onClick={handleMoodChange}>Change Mood</button>
        </div>
    )
}