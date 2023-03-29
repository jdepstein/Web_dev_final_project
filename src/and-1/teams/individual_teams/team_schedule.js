import TeamNav from "./team_nav";
import Nav from "../../nav";
import NavigationSidebar from "../../sidebars/nav";
import Standings from "../../sidebars/standings";

function TeamSchedule() {
    return (
        <>
            <TeamNav/>
            <div className="row">
                <NavigationSidebar/>
                <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                    hello Schedule
                </div>
                <Standings/>
            </div>

        </>

    );
}
export default TeamSchedule;