import {Route, Routes} from "react-router";

import Teams from "./index";
import TeamHome from "./individual_teams";
import TeamSchedule from "./individual_teams/team_schedule";
import TeamForum from "./individual_teams/team_forum";


function TeamRouting() {
    return (
            <Routes>
                <Route index element={<Teams/>}/>
                <Route path={"/:team"} element={<TeamHome/>}/>
                <Route path="/:team/team-home" element={<TeamHome/>}/>
                <Route path="/:team/team-schedule" element={<TeamSchedule/>}/>
                <Route path="/:team/team-forum" element={<TeamForum/>}/>
            </Routes>

        );
    }
export default TeamRouting;
