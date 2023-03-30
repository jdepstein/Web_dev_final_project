import NavigationSidebar from "../components/nav";
import Standings from "../components/standings";
import LatestResults from "../components/latest-results";
import ForumPage from "./forum-page";

function Forum() {
    return (
        <>
            <LatestResults/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <ForumPage/>
                <Standings/>
            </div>
        </>
    );
}

export default Forum;