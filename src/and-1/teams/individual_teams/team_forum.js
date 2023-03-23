import TeamNav from "./team_nav";
import Nav from "../../nav";

function TeamForum(team) {
    return (
        <>
            <Nav/>
            <TeamNav team={team}/>
        </>

    );
}
export default TeamForum;