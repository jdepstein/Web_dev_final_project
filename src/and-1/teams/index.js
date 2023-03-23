import Nav from "../nav";
import Standings from "../sidebars/standings";
import Socials from "../sidebars/socials";
import TeamSearch from "./teamsearch";


function Teams(teams) {
    return (
        <>
            <Nav/>
            <div className="row container-fluid">
                <Standings/>
                <TeamSearch teams={teams}/>
                <Socials/>
            </div>
        </>
    );
}

export default Teams;