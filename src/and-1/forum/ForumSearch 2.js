import NavigationSidebar from "../components/nav";
import Standings from "../components/standings";
import LatestResults from "../components/latest-results";
import ForumPage from "./forum-page";

function ForumSearch() {
    return (
        <div>
            <LatestResults/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <ForumPage/>
                <Standings/>
            </div>
        </div>
    );
}

export default ForumSearch;