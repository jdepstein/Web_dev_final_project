import NavigationSidebar from "../components/nav";
import Standings from "../components/standings";
import ApiLatestResults from "../components/latest-results/api-index";
import ForumSummary from "../forum-summary";
function Home() {
    
    return (
        <>
            <ApiLatestResults/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <ForumSummary/>
                <Standings/>
            </div>
        </>
    );
}

export default Home;