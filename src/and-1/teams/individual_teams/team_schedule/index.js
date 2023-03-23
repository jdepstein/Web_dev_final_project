import TeamNav from "../team_nav";
import Nav from "../../../nav";

function TeamSchedule(team) {
    return (
        <>
            <Nav/>
            <TeamNav team={team}/>
        </>

    );
}
export default TeamSchedule;