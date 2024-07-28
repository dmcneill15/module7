import { useState } from "react";
import {EmojiProvider, useEmojiContext} from '../context/EmojiContext';

export function UpdateEmoji() {

    // destructure the context values passed via useEmojiContext
    const{currentEmoji, handleUpdateEmoji} = useEmojiContext();

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
            <span role="img" aria-label="happy" style={{fontSize: '50px'}}>{currentEmoji}</span>
            </div><br></br>

            <button onClick={handleMoodChange}>Change Mood</button>
        </div>
    )
}