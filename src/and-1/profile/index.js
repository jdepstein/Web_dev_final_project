import NavigationSidebar from "../components/nav";
import Standings from "../components/standings";
import ProfilePage from "./profile-page";
import ApiLatestResults from "../components/latest-results/api-index";

function Profile() {
    return (
        <>
            <ApiLatestResults/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <ProfilePage/>
                <Standings/>
            </div>
       </>
    );
}

export default Profile;