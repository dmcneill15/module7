import { Outlet, useParams, Link } from "react-router-dom";
import { useDataReduced } from "../hooks/useDataReduced"

// save as pages/PostsPage.jsx
export default function PostsPage() {
    return (
        <div className="Posts">
            <h1>Posts</h1>
            <Outlet />
        </div>
    )
}

export function PostList() {
    const {data:postsData} = useDataReduced('https://jsonplaceholder.typicode.com/posts?_limit=5');

    // the ? means only call map if postsData is not null
    const postList = postsData?.map(post => (
        <li key={post.id}><Link to={"/posts/" + post.id}>
            Post #{post.id}: {post.title}</Link></li>
    ));
    return (
        <ul>{postList}</ul>
    )
}

export function Post() {
    const { id } = useParams(); // custom hook to access dynamic params
    const {data:post} = useDataReduced('https://jsonplaceholder.typicode.com/posts/' + id);
    return (
        <div className="Post">
            {post ?
                <><h3>Post #{post.id}: {post.title}</h3>
                    <p>{post.body}</p></>
                : "Loading ..."}
        </div>
    )
}