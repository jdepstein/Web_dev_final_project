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



function isfollowing(followers, user) {
    for (let i = 0; i < followers.length; i++) {
        if (followers[i].follower._id === user._id) {
            return true;
        }
    }
    return false;
}

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];  
const getDatePretty = (date) => {
    const newDate = new Date(date)
    const month = monthNames[newDate.getMonth() + 1]
    const day = newDate.getUTCDate();
    const year = newDate.getUTCFullYear();
    const output = month + ": " + day  + ', ' + year

    return output
}


export {get_team, isfollowing, getDatePretty};
