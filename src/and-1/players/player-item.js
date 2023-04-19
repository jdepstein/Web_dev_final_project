import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import CreatePost from '../create-post';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ForumItem from '../forum/forum-item';
import {useParams} from "react-router";
import {findPlayer, createPlayer} from "../services/player-service";
import {findPlayerPosts} from "../services/posts-service";
import {getLikedBy, likePlayer, unlikePlayer} from "../services/playerLike-service";



function isLiked(likes, user) {
    if (likes === null)
        return false;
    for (let i = 0; i < likes.length; i++) {
        if (likes[i].liker._id === user._id) {
            return true;
        }
    }
    return false;
}


function PlayerItem() {
    const {pid} = useParams()
    const {currentUser} = useSelector( state => state.UserData)
    const [personalInfo, setPersonalInfo] = useState([])
    const [playerStats, setPlayerStats] = useState('')
    const [player, setPlayer] = useState('')
    const [posts, setPosts] = useState([])
    const [likes, setLikes] = useState([]);


    useEffect(() => {
        fetchMe()
        fetchStats()
        fetchPlayer()
        fetchPlayerPosts()
        fetchLikes()
    }, [pid, player._id])

    const fetchStats = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ffe553bafcmsh09081a7421177b6p1e80fajsn7bcaea95a37d',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        };

        fetch(`https://api-nba-v1.p.rapidapi.com/players/statistics?id=${pid}&season=2022`, options)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setPlayerStats(data.response)
            })
            .catch(err => console.error(err));

    }

    const fetchMe = () => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ffe553bafcmsh09081a7421177b6p1e80fajsn7bcaea95a37d',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        };

        fetch(`https://api-nba-v1.p.rapidapi.com/players?id=${pid}`, options)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setPersonalInfo(data.response)
            })
            .catch(err => console.error(err));
    }


  const liked = async () => {
      if (currentUser !== undefined && currentUser._id !== undefined){ 
        let team = "general"
        if (playerStats[0] !== undefined){
            team = playerStats[0].team.name
        }
        if (player === "player" || player === null){
            const player1 = await createPlayer({"name" : personalInfo[0].firstname + " " + personalInfo[0].lastname, "pid" : pid, "team" : team,
                    "position": personalInfo[0].leagues.standard.pos, "number" : personalInfo[0].leagues.standard.jersey ? personalInfo[0].leagues.standard.jersey : 0 ,
                     "liked": true, likes: 1 });
            await likePlayer(player._id);

            window.location.reload()
        }
        else {
            await likePlayer(player._id);
            window.location.reload()
            }
      }
   }

   const unliked = async () => {
      if (currentUser !== undefined && currentUser._id !== undefined){ 
         await unlikePlayer(player._id);
            window.location.reload()
      }
   }
   const fetchPlayer = async () => {
        setPlayer(await findPlayer(pid))
   }

   const fetchPlayerPosts = async () => {
        setPosts(await findPlayerPosts(pid))
   }

   const fetchLikes = async () => {
        if(player !== "player" && player !== null && player !== undefined && player !== ''){
            setLikes(await getLikedBy(player._id))
        }
   }


    let pts = 0
    let rb = 0
    let as = 0
    let bl = 0
    if (playerStats) {
        if(playerStats.length !== 0) {
            playerStats.forEach(game => {
                    pts += game.points
                    rb += game.totReb
                    as += game.assists
                    bl += game.blocks
                }
            )
            pts = Math.round((pts / playerStats.length) * 100) / 100
            rb = Math.round((rb / playerStats.length) * 100) / 100
            as = Math.round((as / playerStats.length) * 100) / 100
            bl = Math.round((bl / playerStats.length) * 100) / 100
        }
    }
    return (
        <>
        {personalInfo && playerStats &&
            <>
            {personalInfo[0] &&
                <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                    <div className="a1-bg-red-light">
                        <div className="row">
                            <div className="col-1 mt-2 mb-4">
                                <img src={playerStats[0] ? playerStats[0].team.logo : ""} alt="" className="a1-player-page-image ms-3"/>
                            </div>
                            <div className="col-4 mt-4">
                                <img src="../../images/jaylen.png" alt="" className="ms-3 a1-image_player"/>
                            </div>
                            <div className="col-5 mt-4">
                                <span
                                    className="text-white a1-font-family a1-font-size-12px ">{playerStats[0] ? playerStats[0].team.name : "n/a"} | {personalInfo[0].leagues.standard.jersey} | {personalInfo[0].leagues.standard.pos} </span>
                                <div className="text-white a1-font-family h2 fw-bold m-0 p-0"> {personalInfo[0].firstname}</div>
                                <div className="text-white a1-font-family h2 fw-bold  m-0 p-0"> {personalInfo[0].lastname}</div>
                            </div>
                            <div className="col-2 mt-4">
                                {
                                    !currentUser ?
                                        <></>
                                        :
                                        isLiked(likes, currentUser) ?
                                            <div className='nav-item float-end text-white h3 me-4 mt-2'>
                                                {likes.length} 
                                                <i className="fa fa-heart text-white h3 ms-1"
                                                    onClick={unliked}>
                                                </i>
                                            </div>
                                            :
                                            <div className='nav-item float-end text-white h3 me-4 mt-2'>
                                                {likes.length}
                                                <i className="fa fa-heart nav-item float-end text-white h3 ms-1 fw-normal"
                                                    onClick={liked}>
                                                    </i>
                                            </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='a1-bg-red border-1 border-top border-white'>
                        <div className="row">
                            <div className="col-2 border-1 border-end border-white text-center pt-2 pb-2">
                                <div className='m-0 p-0 text-white h5 1-font-family'>PPG</div>
                                <div className='m-0 p-0 text-white h5 1-font-family fw-bold'> {pts}</div>
                            </div>
                            <div className="col-2 border-1 border-end border-white text-center pt-2">
                                <div className='m-0 p-0 text-white h5 1-font-family'>RPG</div>
                                <div className='m-0 p-0 text-white h5 1-font-family fw-bold'>{rb}</div>
                            </div>
                            <div className="col-2 border-1 border-end border-white text-center pt-2">
                                <div className='m-0 p-0 text-white h5 1-font-family'>APG</div>
                                <div className='m-0 p-0 text-white h5 1-font-family fw-bold'>{as}</div>
                            </div>
                            <div className="col-2 border-1 border-end border-white text-center pt-2">
                                <div className='m-0 p-0 text-white h5 1-font-family'>BPG</div>
                                <div className='m-0 p-0 text-white h5 1-font-family fw-bold'>{bl}</div>
                            </div>
                            <div className="col-2 border-1 border-end border-white p-0 text-center">
                                <div className='m-0 p-0 text-white h5 1-font-family border-1 border-white  border-bottom pt-1 pb-1'>
                                    <div className='m-0 p-0 text-white a1-font-size-12px 1-font-family'>Height</div>
                                    <div className='m-0 p-0 text-white a1-font-size-12px 1-font-family'> {personalInfo[0].height != null ? personalInfo[0].height.feets : "n/a"}' {personalInfo[0].height.inches != null ? personalInfo[0].height.inches : "n/a" }</div>
                                </div>
                                <div className='m-0 p-0 text-white h5 1-font-family pt-1'>
                                    <div className='m-0 p-0 text-white a1-font-size-12px 1-font-family'>B-Day</div>
                                    <div className='m-0 p-0 text-white a1-font-size-12px 1-font-family'>{personalInfo[0].birth != null ? personalInfo[0].birth.date : "n/a"}</div>
                                </div>
                            </div>

                            <div className="col-2 border-1 border-end border-white p-0 text-center">
                                <div className='m-0 p-0 text-white h5 1-font-family border-1 border-white  border-bottom pt-1 pb-1'>
                                    <div className='m-0 p-0 text-white a1-font-size-12px 1-font-family'>Weight</div>
                                    <div className='m-0 p-0 text-white a1-font-size-12px 1-font-family'> {personalInfo[0].weight != null ? personalInfo[0].weight.pounds + " lbs" : "n/a"}</div>
                                </div>
                                <div className='m-0 p-0 text-white h5 1-font-family pt-1 pb-1'>
                                    <div className='m-0 p-0 text-white a1-font-size-12px 1-font-family'>College</div>
                                    <div className='m-0 p-0 text-white a1-font-size-12px 1-font-family'>{personalInfo[0].college != null ? personalInfo[0].college : "n/a"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isLiked(likes, currentUser) &&
                        <CreatePost data={{"from_team" :
                                    playerStats[0] ? playerStats[0].team.name.split(" ")[playerStats[0].team.name.split(" ").length - 1].toLowerCase() : "None",
                                
                                "player" : pid}
                                
                                }/>
                    }
                    {
                        posts.map(post =>
                            <ForumItem post={post}/>
                        )
                    }
                </div>
            }
        </>
        }
    </>
    );
}

export default PlayerItem;