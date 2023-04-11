import NavigationSidebar from "../components/nav";
import Standings from "../components/standings";
import LatestResults from "../components/latest-results";
import EditProfilePage from "./edit-profile-page";

function EditProfile() {
    return (
        <>
            <LatestResults/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <EditProfilePage/>
                <Standings/>
            </div>
        </>
    );
}

export default EditProfile;