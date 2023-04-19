import React from "react";

const ApiConferenceTableItem = (
    {
        data = {
            "league": "standard",
            "season": 2022,
            "team": {
                "id": 2,
                "name": "Boston Celtics",
                "nickname": "Celtics",
                "code": "BOS",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Celtics_de_Boston_logo.svg/1024px-Celtics_de_Boston_logo.svg.png"
            },
            "conference": {
                "name": "east",
                "rank": 2,
                "win": 55,
                "loss": 25
            },
            "division": {
                "name": "atlantic",
                "rank": 1,
                "win": 55,
                "loss": 25,
                "gamesBehind": null
            },
            "win": {
                "home": 30,
                "away": 25,
                "total": 55,
                "percentage": "0.688",
                "lastTen": 7
            },
            "loss": {
                "home": 9,
                "away": 16,
                "total": 25,
                "percentage": "0.312",
                "lastTen": 3
            },
            "gamesBehind": null,
            "streak": 1,
            "winStreak": true,
            "tieBreakerPoints": null
        },

    }) => {

    return(
        <tr className="text-dark">
            <td>
                <img alt="" className="float-start me-1 d-inline-flex a1-logo-image" src={data.team.logo}/>
                <span className="float-start text-nowrap" >{data.team.name}</span>
            </td>
            <td>{data.conference.win}</td>
            <td>{data.conference.loss}</td>
            <td>{data.win.percentage}</td>
            <td className="d-none d-xl-block">{data.division.gamesBehind}</td>
            <td>{data.win.home} - {data.loss.home}</td>
            <td>{data.win.away} - {data.loss.away}</td>
            <td className="d-none d-xl-block"> {data.division.win} - {data.division.loss}</td>
        </tr>
    );
};
export default ApiConferenceTableItem;
