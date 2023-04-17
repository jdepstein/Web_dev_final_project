import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import CreatePost from '../create-post';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ForumItem from '../forum/forum-item';
import {useParams} from "react-router";


const test = {
    "player": {
      "id": 75,
      "firstname": "Jaylen",
      "lastname": "Brown"
    },
    "team": {
      "id": 2,
      "name": "Boston Celtics",
      "nickname": "Celtics",
      "code": "BOS",
      "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Celtics_de_Boston_logo.svg/1024px-Celtics_de_Boston_logo.svg.png"
    },
    "game": {
      "id": 12179
    },
    "points": 18,
    "pos": "SG",
    "min": "27",
    "fgm": 9,
    "fga": 19,
    "fgp": "47.4",
    "ftm": 0,
    "fta": 0,
    "ftp": "0",
    "tpm": 0,
    "tpa": 4,
    "tpp": "0",
    "offReb": 1,
    "defReb": 2,
    "totReb": 3,
    "assists": 4,
    "pFouls": 1,
    "steals": 1,
    "turnovers": 4,
    "blocks": 0,
    "plusMinus": "-24",
    "comment": null
  }
function PlayerItem(player={}) {
    const dispatch = useDispatch()
    let {currentUser} = useSelector( state => state.UserData)
    const {posts, loading} = useSelector(state => state.postData)

    const {pid} = useParams()
    const {search} = useParams();
    const [searchValue, setSearch] = useState('');
    const [personalInfo, setPersonalInfo] = useState([])
    const [playerStats, setPlayerStats] = useState('')

    useEffect(() => {
        fetchMe()
        fetchStats()
    }, [pid])
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


    useEffect(() => {
         //dispatch(findPlayerPostsThunk(player.player.id)) 
  }, [])
  const like = async () => {
      if (currentUser !== undefined && currentUser._id !== undefined){ 
         //await like(player.id);
         window.location.reload()
      }
   }

   const unlike = async () => {
      if (currentUser !== undefined && currentUser._id !== undefined){ 
         //await unlike(player.id);
         window.location.reload()
      }
   }




    currentUser = true
    const liked = true
    const currentPlayer = player.player;
    let pts = 0
    let rb = 0
    let as = 0
    let bl = 0
    console.log(playerStats)
    if(playerStats.length !== 0) {
        console.log(playerStats)
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

    return (
        <>
        {personalInfo[0] && playerStats[0] &&
            <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                <div className="a1-bg-red-light">
                    <div className="row">
                        <div className="col-1 mt-2 mb-4">
                            <img src={playerStats[0].team.logo} alt="" className="a1-player-page-image ms-3"/>
                        </div>
                        <div className="col-4 mt-4">
                            <img src="../../images/jaylen.png" alt="" className="ms-3 a1-image_player"/>
                        </div>
                        <div className="col-5 mt-4">
                            <span
                                className="text-white a1-font-family a1-font-size-12px ">{playerStats[0].team.name} | {personalInfo[0].leagues.standard.jersey} | {personalInfo[0].leagues.standard.pos} </span>
                            <div className="text-white a1-font-family h2 fw-bold m-0 p-0"> {personalInfo[0].firstname}</div>
                            <div className="text-white a1-font-family h2 fw-bold  m-0 p-0"> {personalInfo[0].lastname}</div>
                        </div>
                        <div className="col-2 mt-4">
                            {
                                !currentUser ?
                                    <></>
                                    :
                                    liked ?
                                        <i className="fa fa-heart nav-item float-end text-white h3 me-4 mt-2"></i>
                                        //</div>onClick={() =>  dispatch(updateTeamThunk({
                                        //</div>    ...teams, liked: false, likes: teams.likes - 1}))}>
                                        //</i>
                                        :
                                        <i className="fa fa-heart nav-item float-end text-white h3 me-4 mt-2 fw-normal"></i>
                                //</div>onClick={() =>  dispatch(updateTeamThunk({
                                //</div>         ...teams, liked: true, likes: teams.likes + 1}))}>
                                //</i>
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
                <CreatePost/>
                {
                    [].map(post =>
                        <ForumItem post={post}/>
                    )
                }
            </div>
        }
    </>
    );
}

export default PlayerItem;