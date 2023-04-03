import TeamNav from "./team-nav";
import Standings from "../../components/standings";
import NavigationSidebar from "../../components/nav";
import TeamHomePage from "./team-home";

function TeamHome()
    {
    return (
        <>
            <TeamNav/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <TeamHomePage/>
                <Standings/>
            </div>

        </>

    );
}
export default TeamHome;