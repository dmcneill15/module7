import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
//import { MyThemeContext } from '../context/MyThemeContext'

export default function NavBar() {
    //const { theme } = useContext(MyThemeContext);

    return (
        <nav className="NavBar"
            style={{ backgroundColor: 'lightgray', color: 'black' }}>
            <ul className="menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/dash">Dashboard</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul> {/* ++ Add another page with route and component */}
        </nav>
    )
}
// Save as components/NavBar.jsx and render in App.jsx
// ABOVE <AppRoutes />