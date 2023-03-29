import Standings from "../sidebars/standings";
import TeamSearch from "./teamsearch";
import NavigationSidebar from "../sidebars/nav";
import LatestResults from "../sidebars/latest_results";


function Teams(){
    return (
        <>
            <LatestResults/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                    <TeamSearch/>
                </div>
                <Standings/>
            </div>
        </>
    );
}

export default Teams;