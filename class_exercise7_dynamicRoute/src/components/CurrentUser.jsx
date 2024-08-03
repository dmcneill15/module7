import { useUserContext } from "../context/UserContext";

export function CurrentUser() {

    // destructure the context values passed via useEmojiContext custom hook
    const { currentUser } = useUserContext();


    if (currentUser.email)
        return (
            <p>Currently Logged In: {currentUser.email}</p>
        );
    else
        return(
    <p>Head to Login Page</p>
    );
}