import React from "react";
import data from "./example_response.json";

const ConferenceTableApiItem = (team_id = 0) => {
    return(
        <tr className="text-dark">
            <td>
                <img alt="" className="float-start me-1 d-inline-flex a1-logo-image" src={data.response[team_id.team_id].team.logo}/>
                <span className="float-start text-nowrap" >{data.response[team_id.team_id].team.name}</span>
            </td>
            <td>{data.response[team_id.team_id].conference.win}</td>
            <td>{data.response[team_id.team_id].conference.loss}</td>
            <td>{data.response[team_id.team_id].win.percentage}</td>
            <td>{data.response[team_id.team_id].division.gamesBehind}</td>
            <td>{data.response[team_id.team_id].win.home} - {data.response[team_id.team_id].loss.home}</td>
            <td>{data.response[team_id.team_id].win.away} - {data.response[team_id.team_id].loss.away}</td>
            <td> {data.response[team_id.team_id].division.win} - {data.response[team_id.team_id].division.loss}</td>
        </tr>
    );
};
export default ConferenceTableApiItem;

