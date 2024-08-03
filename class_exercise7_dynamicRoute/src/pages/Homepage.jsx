import { CurrentUser } from "../components/CurrentUser"

export default function Homepage() { // Save in pages/Homepage.jsx
    return (
        <div className="Homepage">
            <h1>Home</h1>
            <CurrentUser />
        </div>
    )
}