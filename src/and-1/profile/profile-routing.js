import {Route, Routes} from "react-router";
import Profile from "./index";
import EditProfile from "../edit-profile";
import OtherProfile from "./other-profile";


function ProfileRouting() {
    return (
        
        <Routes> 
                <Route index element={<Profile/>}/>
                <Route path="/edit-profile" element={<EditProfile/>}/>
                <Route path={"/:handle"} element={<OtherProfile/>}/>
        </Routes>

    );
}
export default ProfileRouting;