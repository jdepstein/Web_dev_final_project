import React from "react";
const ConferenceTableItem = (
    {
        team = {
            "team": "Washington Wizards",
            "percentage": 0.725,
            "wins": 50,
            "losses": 19,
            "games_back": 2,
            "home": "28-6",
            "away": "22-13",
            "division" : "8-4",
            "conference" : "29-14",
            "logo" : "../../../public/images/wizards.png"
        }
    }
) => {
    return(
        <tr>
            <td>

                <img alt="" className="float-start me-1 d-inline-flex a1-logo-image" src={team.logo}/>
                <span className="float-start text-nowrap" >{team.team}</span>
            </td>
            <td>{team.wins}</td>
            <td>{team.loss}</td>
            <td>{team.percentage}</td>
            <td>{team.games_back}</td>
            <td>{team.home}</td>
            <td>{team.away}</td>
            <td>{team.division}</td>
            <td>{team.conference}</td>
        </tr>
    );
};
export default ConferenceTableItem;

