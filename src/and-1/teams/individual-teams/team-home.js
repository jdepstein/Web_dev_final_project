import {useParams} from "react-router";

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {findIndividualTeamThunk}
    from "../../thunks/teams-thunks";

import {findUserThunk} from "../../thunks/users-thunks";


function TeamHomePage()
{   //teamUsers
    const { teamName } = useParams();
    const {teams, loading} = useSelector(
        state => state.teamData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findIndividualTeamThunk(teamName))
    }, [])

    let {user} = useSelector( 
        state => state.UserData)

        useEffect(() => {
            dispatch(findUserThunk( teamName[0].toUpperCase() + teamName.substring(1)))
        },  [])

    const {currentUser} = useSelector( 
        state => state.UserData
    )

    let isCurrent = false
    if (currentUser !== null){
        if (teamName === currentUser.handle){
            isCurrent = true
        }
    }
 

    return (
            <div
                className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                <div className="h2 text-dark a1-font-family fw-bold mt-5 text-center">
                   {user.handle}
                </div>
                <div className="h3 text-dark a1-font-family fw-bold text-center">
                    {user.location}
                </div>
                <div className="h5 text-dark a1-font-family fw-bold text-center">
                    {user.stadium}
                </div>
                <div className="h4 text-dark a1-font-family fw-bold mt-5 text-center border-bottom pb-3 mb-2">
                    <span className="me-2 text-secondary">Likes:</span> {teams.likes}
                    <span className="me-2 ms-2 text-secondary">Followers: </span> {teams.follows}
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
                <div className="w-75 text-center">
                    <div className="row border p-0 m-0">
                        <img alt="" src="../../images/jaylen.png" className="a1-image_100 col-3" />
                        <div className="card-body-right col-9">
                            <p className="card-title h5 mb-3">Jaylen Brown #6</p>
                            <div className="mb-4">
                                <span className=" me-3 border rounded p-2">Height: 6:3</span>
                                <span className="border rounded p-2">Weight: 210</span>
                            </div>
                                <div>
                                    <span className="border rounded p-2">Position: SG/G</span>
                                </div>
                            </div>
                    </div>
                </div>

            </div>
    );
}
export default TeamHomePage;