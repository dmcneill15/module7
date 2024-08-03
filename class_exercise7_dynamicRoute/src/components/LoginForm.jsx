import { useState } from "react";
import { useUserContext } from "../context/UserContext";

export function LoginForm() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [submitResult, setSubmitResult] = useState('');

    // destructure the context values passed via UserProvider
    const { currentUser, handleUpdateUser } = useUserContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userPassword.length < 5) {
            setSubmitResult('Password must be at least 5 characters long');
        } else if (userPassword === userEmail) {
            setSubmitResult('Password must not match email address');
        } else {
            setSubmitResult('Successful login.');
            handleUpdateUser({ email: userEmail }); // context function
        }
    }

    {/* if the user is already logged in, show msg instead of form */ }
    if (currentUser.email)
        return (
            <><p>Welcome {currentUser.email}!</p>
                <button onClick={() => handleUpdateUser({})}>Log Out</button>
            </>
        );

    // otherwise render same form as previously, no changes
    else return (
        <div className="LoginForm componentBox">
            <form onSubmit={handleSubmit}>
                <div className="formRow">
                    <label>Email Address:
                        <input type="email" value={userEmail} name="userEmail"
                            onChange={(e) => setUserEmail(e.target.value)} />
                    </label>
                </div>
                <div className="formRow">
                    <label>Password:
                        <input type="password" value={userPassword} name="password"
                            onChange={(e) => setUserPassword(e.target.value)} />
                    </label>
                </div>
                <button>Log In</button>
                <p>{submitResult}</p>
            </form>
        </div>
    )
}
