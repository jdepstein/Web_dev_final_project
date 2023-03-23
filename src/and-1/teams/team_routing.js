import {Route, Routes} from "react-router";
import east from "../data/eastern.json";
import west from "../data/western.json";
import Teams from "./index";
import IndividualTeamRouting from "./individual_teams/indivual_team_routing";


function all_teams() {
    let allTeam = []
    east.forEach(item => {
        allTeam = allTeam.concat(item.teams)
    })
    west.forEach(item => {
        allTeam = allTeam.concat(item.teams)
    })
    return allTeam
}


function TeamRouting() {
    return (
            <Routes>
                <Route index element={<Teams teams={all_teams()}/>}/>
                {
                    all_teams().map((team, i) =>
                        {
                            const path = "/" + team.name.toLowerCase() + "/*";
                            return <Route key={i} path={path} element={<IndividualTeamRouting team={team}/>}/>
                        }
                    )
                }
            </Routes>

        );
    }
export default TeamRouting;
