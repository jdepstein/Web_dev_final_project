import {Route, Routes} from "react-router";
import Profile from "./index";
import EditProfile from "../edit-profile";
import Login from "../login";
import {useSelector} from "react-redux";

// TODO: Route to non-current user profiles need to use the links to do so
// TODO: Set up team page Edit-page

function ProfileRouting() {
    return (

        <Routes>
            <Route index element={<Profile/>}/>
            <Route path={"/:handle"} element={<Profile/>}/>
            <Route path="/edit-profile" element={<EditProfile/>}/>
        </Routes>

    );
}
export default ProfileRouting;