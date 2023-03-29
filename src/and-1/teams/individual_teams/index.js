import TeamNav from "./team_nav";
import Nav from "../../nav";
import Standings from "../../sidebars/standings";
import Socials from "../../sidebars/socials";
import {useLocation} from "react-router";
import {get_team} from "../../helper_funcs";
import NavigationSidebar from "../../sidebars/nav";

function TeamHome()
    {
    return (
        <>
            <TeamNav/>
            <div className="row">
                <NavigationSidebar/>
                <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                    hello Home
                </div>
                <Standings/>
            </div>

        </>

    );
}
export default TeamHome;