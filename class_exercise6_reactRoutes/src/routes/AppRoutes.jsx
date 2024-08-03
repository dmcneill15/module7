import { Route, Routes } from "react-router-dom";
import AboutPage from '../pages/AboutPage'
import DashboardPage from '../pages/DashboardPage'
import { DashboardMessages, DashboardTasks } from "../pages/DashboardPage";
import Homepage from '../pages/Homepage'
import PageNotFound from '../pages/PageNotFound'

// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
// child components using {...props}
function AppRoutes(props) {

    return (
        <Routes>
            {/* index matches on default/home URL: / */}
            <Route index element={<Homepage {...props} />} />

            {/* nested routes, matches on /dash/messages etc */}
            <Route path="/dash" element={<DashboardPage {...props} />}>
                <Route path="messages" element={<DashboardMessages />} />
                <Route path="tasks" element={<DashboardTasks />} />
            </Route>

            <Route path='/about' element={<AboutPage {...props} />} />

            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;