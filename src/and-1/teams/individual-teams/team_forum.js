import TeamNav from "./team_nav";
import NavigationSidebar from "../../components/nav";
import Standings from "../../components/standings";

function TeamForum() {
    return (
        <>
            <TeamNav/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                    hello Forum
                </div>
                <Standings/>
            </div>

        </>

    );
}
export default TeamForum;