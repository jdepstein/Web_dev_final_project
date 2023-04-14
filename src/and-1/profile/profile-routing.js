import {Route, Routes} from "react-router";
import Profile from "./index";
import EditProfile from "../edit-profile";
import Login from "../login";
import {useSelector} from "react-redux";


function ProfileRouting() {
    const {currentUser} = useSelector(state => state.UserData)
    return (
        
        <Routes> 
            
            <Route path={"/:handle"} element={<Profile/>}/>

            {!currentUser ?
                <>
                    <Route index element={<Login/>}/>
                    <Route path="/edit-profile" element={<Login/>}/>
                </>

            :
                <>
                    <Route index element={<Profile/>}/>
                    <Route path="/edit-profile" element={<EditProfile/>}/>
                </>
            }
        </Routes>

    );
}
export default ProfileRouting;