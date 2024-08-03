import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <div className="PageNotFound">
            <h1>Page Not Found</h1>
            <p>What were you looking for?
                Maybe going back <Link to="/">Homepage </Link>
                will help you find it.</p>
        </div>
    )
}

export default PageNotFound