import {useParams} from "react-router";

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {findIndividualTeamThunk}
    from "../../thunks/teams-thunks";

import {findTeamUserThunk}
    from "../../thunks/team-users-thunks";


function TeamHomePage()
{   //teamUsers
    const { teamName } = useParams();
    const {team, loading} = useSelector(
        state => state.teamData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findIndividualTeamThunk(teamName))
    }, [])

    const {teamUsers, loading2} = useSelector(
        state => state.teamUserData);
    useEffect(() => {
        dispatch(findTeamUserThunk(teamName))
    }, [])
    return (
            <div
                className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                <div className="h2 text-dark a1-font-family fw-bold mt-5 text-center">
                   {teamUsers.name}
                </div>
                <div className="h3 text-dark a1-font-family fw-bold text-center">
                    {teamUsers.city}
                </div>
                <div className="h5 text-dark a1-font-family fw-bold text-center">
                    {teamUsers.stadium}
                </div>
                <div className="h4 text-dark a1-font-family fw-bold mt-5 text-center border-bottom pb-3 mb-2">
                    <span className="me-2 text-secondary">Likes:</span> {team.likes}
                    <span className="me-2 ms-2 text-secondary">Followers: </span> {team.follows}
                </div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th></th>
                        <th scope="col">Player</th>
                        <th scope="col">#</th>
                        <th scope="col">Pos</th>
                        <th scope="col">Height</th>
                        <th scope="col">Weight</th>
                        <th scope={"col"}>Likes</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        [].map((player, i) =>
                            <tr key={i}>
                                <th>
                                    <img alt="" className="d-inline a1-player-image" src={player.photo}/>
                                </th>
                                <td>
                                    {player.name}
                                </td>
                                <td>{player.number}</td>
                                <td>{player.position}</td>
                                <td>{player.height}</td>
                                <td>{player.weight}</td>
                                <td>
                                    <i className="fa fa-heart text-dark me-1 fw-normal">
                                    </i>
                                    0
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
    );
}
export default TeamHomePage;