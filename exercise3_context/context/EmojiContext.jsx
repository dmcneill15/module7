import React from 'react';
import { useState, useContext } from "react";

//1. Create context
const EmojiContext = React.createContext();

// Custom provider component for this context.
// Use it in App.jsx like <UserProvider>...</UserProvider>
export const EmojiProvider = (props) => {
    // store the current user in state at the top level
    const [currentEmoji, setCurrentEmoji] = useState('😊');

    // sets user object in state, shared via context
    const handleUpdateEmoji = (emoji) => {
        setCurrentEmoji(emoji);
    }

    // 2. Provide the context.
    // The Provider component of any context (UserContext.Provider)
    // sends data via its value prop to all children at every level.
    // We are sending both the current emoji and an update function
    return (
        <EmojiContext.Provider value={{ currentEmoji, handleUpdateEmoji }}>
            {props.children}
        </EmojiContext.Provider>
    );
}

// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component
export const useEmojiContext = () => {
    return useContext(EmojiContext);
}