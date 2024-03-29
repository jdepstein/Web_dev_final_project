import {Route, Routes} from "react-router";
import Forum from "./index";
import ForumSearch from "./ForumSearch";
import CreatePostPage from "../create-post/create-post-page";




function ForumRouting() {
    return (
            <Routes>
                <Route index element={<Forum/>}/>
                <Route path={"/:topic"} element={<ForumSearch/>}/>
                <Route path={"/create-post/:from_team/:pid"} element={<CreatePostPage/>}/>
            </Routes>


    );
}
export default ForumRouting;