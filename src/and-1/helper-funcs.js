import east from "./data/eastern.json";
import west from "./data/western.json";

function extract_latest_games(json) {

}

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

export {get_team, all_teams};
