import TeamNav from "./team-nav";
import NavigationSidebar from "../../components/nav";
import Standings from "../../components/standings";
import TeamForumPage from "./team-forum-page";

function TeamForum() {
    return (
        <>
            <TeamNav/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <TeamForumPage/>
                <Standings/>
            </div>

        </>

    );
}
export default TeamForum;