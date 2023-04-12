import {useParams} from "react-router";
import axios from 'axios';

import React, {useEffect} from "react";
import { useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {findIndividualTeamThunk}
    from "../../thunks/teams-thunks";

import {findUserThunk} from "../../thunks/users-thunks";


function TeamHomePage()
{
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
    if (currentUser ==! null){

        if (teamName === currentUser.handle){
            isCurrent = true
        }
    }
    const team_id = teams.tid + ''
    console.log(team_id);
    const API_KEY = '1998d212e4mshad0ae3aca89905dp189a73jsnb9864ccfb4fe'
    const [response, setResponse] = useState(null);

    const fetchRoster = async () => {
        try {
            const res = await axios.get(
                `https://api-nba-v1.p.rapidapi.com/players`,
                {
                    headers: {
                        'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
                        'x-rapidapi-key': API_KEY
                    },
                    params: {team: team_id, season: '2022'}
                }
            );
            setResponse(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        // Trigger the API Call
        fetchRoster();
    }, []);

    console.log(response.response);




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
                    {
                        response.response.map((player,i ) =>
                                <div className="w-75 text-center mt-3">
                                    <div className="row border p-0 m-0">
                                        <img alt="" src="../../images/jaylen.png" className="a1-image_100 col-3"/>
                                        <div className="card-body-right col-9">
                                            <p className="card-title h5 mb-3">{player.firstname} {player.lastname} : {player.leagues.standard.jersey}</p>
                                            <div className="mb-4">
                                                <span className=" me-3 border rounded p-2">Height: {player.height.feets} : {player.height.inches}</span>
                                                <span className="border rounded p-2">Weight: {player.weight.pounds}</span>
                                            </div>
                                            <div>
                                                <span className="border rounded p-2">Position: {player.leagues.standard.pos}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                        )
                    }

            </div>
    );
}
export default TeamHomePage;