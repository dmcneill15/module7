import { useState } from "react";
import { useUserContext } from "../context/UserContext";

import { TextField, Button } from "@mui/material";
import { FormControl, Box } from "@mui/material";
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';

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
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Stack component="form"
                    sx={{
                        width: '50%',
                    }}
                    spacing={2}
                    noValidate
                    autoComplete="off"
                >
                    <FormControl onSubmit={handleSubmit}>
                        <form >
                            <TextField id="outlined-basic" label="Email" variant="outlined" type="email" value={userEmail} name="userEmail"
                                onChange={(e) => setUserEmail(e.target.value)} />
                            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" value={userPassword} name="password"
                                onChange={(e) => setUserPassword(e.target.value)} />
                            <Button variant="contained" type="submit">Log In</Button>
                            <p>{submitResult}</p>
                        </form>
                    </FormControl>
                </Stack>
            </Box>
        </div>
    )
}
