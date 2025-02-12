import React from 'react';
import { useState, useContext } from "react";

const UserContext = React.createContext();

export const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState({});

    const handleUpdateUser = (user) => {
        setCurrentUser(user);
    }

    return (
        <UserContext.Provider value={{ currentUser, handleUpdateUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export const useUserContext = () =>{
    return useContext(UserContext)
}