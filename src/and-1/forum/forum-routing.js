import {Route, Routes} from "react-router";
import Forum from "./index";
import ForumSearch from "./ForumSearch";
import CreatePostPage from "../create-post/create-post-page";
import LoadProfile from "../components/load-profile"




function ForumRouting() {
    return (
            <Routes>
                <Route index element={<Forum/>}/>
                <Route path={"/:topic"} element={<ForumSearch/>}/>
                <Route path={"/create-post"} element={<CreatePostPage/>}/>
            </Routes>


    );
}
export default ForumRouting;