import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import BitcoinRatesPage from "../pages/BitconRatesPage";
import PageNotFound from "../pages/PageNotFound"

function AppRoutes(props) {

    return (
        <Routes>
            {/* index matches on default/home URL: / */}
            <Route index element={<Homepage {...props} />} />

            {/* nested routes, matches on /dash/messages etc */}
            <Route path='/login' element={<LoginPage {...props} />}>
            </Route>

            <Route path='/bitcoin' element={<BitcoinRatesPage {...props} />} />

            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;