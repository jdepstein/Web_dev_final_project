import NavigationSidebar from "../components/nav";
import Standings from "../components/standings";
import LatestResults from "../components/latest-results";
import ForumSummary from "../forum-summary";

function Home() {
    return (
        <>
            <LatestResults/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <ForumSummary/>
                <Standings/>
            </div>
        </>
    );
}

export default Home;