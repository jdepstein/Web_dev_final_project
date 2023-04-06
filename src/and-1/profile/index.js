import NavigationSidebar from "../components/nav";
import Standings from "../components/standings";
import LatestResults from "../components/latest-results";
import ProfilePage from "./profile-page";
import profile from "../data/profile.json"
import ApiLatestResults from "../components/latest-results/api-index";

function Profile() {
    return (
        <>
            <ApiLatestResults/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <ProfilePage profile={profile}/>
                <Standings/>
            </div>
       </>
    );
}

export default Profile;