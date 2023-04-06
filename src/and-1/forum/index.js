import NavigationSidebar from "../components/nav";
import Standings from "../components/standings";
import LatestResults from "../components/latest-results";
import ForumPage from "./forum-page";
import ApiLatestResults from "../components/latest-results/api-index";

function Forum() {
    return (
        <>
            <ApiLatestResults/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <ForumPage/>
                <Standings/>
            </div>
        </>
    );
}

export default Forum;