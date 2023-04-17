import {useParams} from "react-router";

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {findIndividualTeamThunk}
    from "../../thunks/teams-thunks";

import {findUserThunk} from "../../thunks/users-thunks";


import FollowersTeam from "./followersdata";
import PlayerComponent from "../../components/playerComponent";


function TeamHomePage()
{   
    const dispatch = useDispatch();
    const { teamName } = useParams();
    const {teams} = useSelector(state => state.teamData)
    const {user} = useSelector(state => state.UserData)
    const [container, setContainer] = useState([])


    const team_id = teams.tid
    useEffect(() => {
        dispatch(findIndividualTeamThunk(teamName))
        dispatch(findUserThunk( teamName[0].toUpperCase() + teamName.substring(1)))
    }, [])

    useEffect(() => {
        fetchRoster()
    }, [team_id])

    const fetchRoster = () => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ffe553bafcmsh09081a7421177b6p1e80fajsn7bcaea95a37d',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        };

        fetch(`https://api-nba-v1.p.rapidapi.com/players?team=${team_id}&season=2022`, options)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setContainer(data.response)
            })
            .catch(err => console.error(err));
    }

    const results =  container.filter((player) => player.leagues.standard != null)
    let remainer = results.length % 2
    let numbers = [];
    for (let i = 0; i < results.length -1; i += 2){
        numbers.push(i)
    }
    if (remainer > 0){
        numbers.push(results.length - remainer)
    }

    console.log("user: ", user)
    return (
        <>
        {user !== undefined && teams !== undefined ?
            <>

            {user._id !== undefined && teams._id !== undefined &&
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
                        <FollowersTeam passeduser={user}/>
                    </div>
                    <div>
                        {
                        numbers.map(i =>
                            {
                                if (results[i+1] !== undefined) {
                                    return (
                                        <div key={i} className="row p-0 m-0 ms-1 me-1">
                                            <PlayerComponent player={results[i]}/>
                                                <div className="col-2"></div>
                                            <PlayerComponent player={results[i+1]}/>
                                        </div>
                                    )
                                }
                                else{
                                    return (
                                        <>
                                            <PlayerComponent key={i} player={results[i]}/>
                                        </>
                                    )
                                }
                            }
                        )
                        }
                    </div>
                </div>
                }
            </>
            :
            <></>

        }
        </>
    );
}
export default TeamHomePage;