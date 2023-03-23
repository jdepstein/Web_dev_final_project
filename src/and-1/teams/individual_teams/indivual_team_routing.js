import {Route, Routes} from "react-router";
import TeamHome from "./index";
import TeamSchedule from "./team_schedule";
import TeamForum from "./team_forum";


function IndividualTeamRouting(team) {
    return (
        <Routes>
            <Route index element={<TeamHome team={team}/>}/>
            <Route path="/schedule" element={<TeamSchedule team={team} />}/>
            <Route path="/forum" element={<TeamForum team={team} />}/>
            }
        </Routes>

    );
}
export default IndividualTeamRouting;