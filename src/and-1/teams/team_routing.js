import {Route, Routes} from "react-router";
import Celtics from "./individual_teams/celtics";
import east from "../data/eastern.json";
import west from "../data/western.json";
import Teams from "./index";


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
    let t = [<Celtics/>, <Celtics/>,]
    return (
            <Routes>
                <Route index element={<Teams teams={all_teams()}/>}/>
                {
                    all_teams().map((team, i) =>
                        <Route key={i} path={team.name.toLowerCase()} element={t[i % 2]} />
                    )
                }
            </Routes>

        );
    }
export default TeamRouting;
