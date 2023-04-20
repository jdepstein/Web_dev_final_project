import {Route, Routes} from "react-router";
import Profile from "./index";
import EditProfile from "../edit-profile";
import OtherProfile from "./other-profile";

import {useSelector} from "react-redux";


function ProfileRouting() {
    const {currentUser} = useSelector(state => state.UserData)
    return (
        
        <Routes> 

                <Route index element={<Profile/>}/>
                <Route path={"/:handle"} element={<OtherProfile/>}/>
        </Routes>

    );
}
export default ProfileRouting;