import NavigationSidebar from "../components/nav";
import Standings from "../components/standings";
import ApiLatestResults from "../components/latest-results/api-index";
import OtherProfilePage from "./other-profile-page";

function OtherProfile() {
    return (
        <>
            <ApiLatestResults/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <OtherProfilePage/>
                <Standings/>
            </div>
       </>
    );
}

export default OtherProfile;