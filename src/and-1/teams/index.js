import Nav from "../nav";
import Standings from "../sidebars/standings";
import Socials from "../sidebars/socials";
import TeamSearch from "./teamsearch";
import NavigationSidebar from "../sidebars/nav";


function Teams(){
    return (
        <div className="row">
            <NavigationSidebar/>
            <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                <TeamSearch/>
            </div>
            <Standings/>
        </div>
    );
}

export default Teams;