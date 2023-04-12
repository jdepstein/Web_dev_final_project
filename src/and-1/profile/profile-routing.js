import {Route, Routes} from "react-router";
import Profile from "./index";
import EditProfile from "../edit-profile";
import Login from "../login";
import {useSelector} from "react-redux";

// TODO: Route to non-current user profiles need to use the links to do so
// TODO: Set up team page Edit-page

function ProfileRouting() {

    const {currentUser} = useSelector( 
        state => state.UserData)
    return (
        <Routes>
            {currentUser ?
                <Route index element={<Profile/>}/>
                :
                <Route index element={<Login/>}/>
            }
            <Route path={"/:handle"} element={<Profile/>}/>
            {currentUser ?
                <Route path="/edit-profile" element={<EditProfile/>}/>
                :
                <Route path="/edit-profile" element={<Login/>}/>
            }
        </Routes>

    );
}
export default ProfileRouting;