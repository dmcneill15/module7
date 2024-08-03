import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import BitcoinRatesPage from "../pages/BitconRatesPage";
import PageNotFound from "../pages/PageNotFound"
import PostsPage from "../pages/PostPage";
import { PostList, Post } from "../pages/PostPage";

function AppRoutes(props) {

    return (
        <Routes>
            {/* index route: matches on default/home URL: / 
            shorthand for defining route with an empty path (path="")*/}
            <Route index element={<Homepage {...props} />} />

            {/* route with a specific path: */}
            <Route path='/login' element={<LoginPage {...props} />} />

            <Route path='/bitcoin' element={<BitcoinRatesPage {...props} />} />

            {/*Nested route */}
            <Route path='/posts' element={<PostsPage {...props} />}>
                <Route index element={<PostList />} /> {/*Using index here to display PostList when on Posts page */}
                {/* dynamic param taken from route, stored in variable called id */}
                <Route path=":id" element={<Post />} />
            </Route>

            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;