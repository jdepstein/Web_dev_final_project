import east from "./data/eastern.json";
import west from "./data/western.json";


function get_team(teamName) {
    let curTeam =
        {
            name : "Celtics",
            logo : "../images/celtics.png" ,
            wins: 50,
            loss: 23,
            colors: "a1-bg-celtics"
        }

    east.forEach(teams => {
        teams.teams.forEach(team => {
            if (teamName === team.name.toLowerCase()) {
                curTeam =  team
            }
        })
    })
    west.forEach(teams => {
        teams.teams.forEach(team => {
            if (teamName === team.name.toLowerCase()) {
                curTeam = team
            }
        })
    })
    return curTeam
}


export {get_team};
