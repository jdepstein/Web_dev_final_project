import {Route, Routes} from "react-router";

import Teams from "./index";
import TeamHome from "./individual-teams";
import TeamSchedule from "./individual-teams/team-schedule";
import TeamForum from "./individual-teams/team-forum";
import EditTeam from "./individual-teams/edit-team";




function TeamRouting() {
    return (
            <Routes>
                <Route index element={<Teams/>}/>
                <Route path={"/:teamName"} element={<TeamHome/>}/>
                <Route path="/:teamName/team-home" element={<TeamHome/>}/>
                <Route path="/:teamName/team-schedule" element={<TeamSchedule/>}/>
                <Route path="/:teamName/team-forum" element={<TeamForum/>}/>
                <Route path="/:teamName/edit-team" element={<EditTeam/>}/>
            </Routes>

        );
    }
export default TeamRouting;
