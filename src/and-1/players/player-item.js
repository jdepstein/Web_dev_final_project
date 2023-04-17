import React from 'react';
import { useSelector } from 'react-redux';
import CreatePost from '../create-post';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ForumItem from '../forum/forum-item';


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
    

    return (
        <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
           <div className="a1-bg-red-light">
                <div className="row">
                    <div className="col-1 mt-2 mb-4">
                        <img src={test.team.logo} alt="" className="a1-player-page-image ms-3"/>
                    </div>
                    <div className="col-4 mt-4">
                        <img src="../../images/jaylen.png" alt="" className="ms-3 a1-image_player"/>
                    </div>
                    <div className="col-5 mt-4">
                       <span className="text-white a1-font-family a1-font-size-12px ">{test.team.name} | #7 | Gaurd-Forward </span>
                       <div className="text-white a1-font-family h2 fw-bold m-0 p-0"> {test.player.firstname}</div>
                       <div className="text-white a1-font-family h2 fw-bold  m-0 p-0"> {test.player.lastname}</div>
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
                           <div className='m-0 p-0 text-white h5 1-font-family fw-bold'> 26.6</div>
                        </div>
                        <div className="col-2 border-1 border-end border-white text-center pt-2">
                           <div className='m-0 p-0 text-white h5 1-font-family'>RPG</div>
                           <div className='m-0 p-0 text-white h5 1-font-family fw-bold'>6.9</div>
                        </div>
                        <div className="col-2 border-1 border-end border-white text-center pt-2">
                           <div className='m-0 p-0 text-white h5 1-font-family'>APG</div>
                           <div className='m-0 p-0 text-white h5 1-font-family fw-bold'>3.5</div>
                        </div>
                        <div className="col-2 border-1 border-end border-white text-center pt-2">
                           <div className='m-0 p-0 text-white h5 1-font-family'>PIE</div>
                           <div className='m-0 p-0 text-white h5 1-font-family fw-bold'>13.2</div>
                        </div>
                        <div className="col-2 border-1 border-end border-white p-0 text-center">
                           <div className='m-0 p-0 text-white h5 1-font-family border-1 border-white  border-bottom pt-1 pb-1'>
                              <div className='m-0 p-0 text-white a1-font-size-12px 1-font-family'>Height</div>
                              <div className='m-0 p-0 text-white a1-font-size-12px 1-font-family'>6'6"</div>
                           </div>
                           <div className='m-0 p-0 text-white h5 1-font-family pt-1'>
                              <div className='m-0 p-0 text-white a1-font-size-12px 1-font-family'>AGE</div>
                              <div className='m-0 p-0 text-white a1-font-size-12px 1-font-family'>26 years</div>
                           </div>
                        </div>

                        <div className="col-2 border-1 border-end border-white p-0 text-center">
                           <div className='m-0 p-0 text-white h5 1-font-family border-1 border-white  border-bottom pt-1 pb-1'>
                              <div className='m-0 p-0 text-white a1-font-size-12px 1-font-family'>Weight</div>
                              <div className='m-0 p-0 text-white a1-font-size-12px 1-font-family'>223lbs</div>
                           </div>
                           <div className='m-0 p-0 text-white h5 1-font-family pt-1 pb-1'>
                              <div className='m-0 p-0 text-white a1-font-size-12px 1-font-family'>College</div>
                              <div className='m-0 p-0 text-white a1-font-size-12px 1-font-family'>Duke</div>
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
    );
}

export default PlayerItem;