import React, { useState, useEffect } from 'react';
import { getFollowers, getFollowing } from '../services/follow-service';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../services/follow-service';

function isfollowing(followers, user) {
    for (let i = 0; i < followers.length; i++) {
        if (followers[i].follower._id === user._id) {
            return true;
        }
    }
    return false;
}



function Followers(passeduser){
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const [isCurrent, setIsCurrent] = useState(false)
    const {posts} = useSelector(state => state.postData)

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];  
    let {user, currentUser} = useSelector(state => state.UserData)

    const fetchFollowers = async () => {
        const response = await getFollowers(user._id);
        setFollowers(response);
    }

    const fetchFollowing = async () => {
        const response = await getFollowing(user._id);
        setFollowing(response);
    }
    user = passeduser.passeduser
    useEffect(() => {
        fetchFollowers();
        fetchFollowing();
    }
    , [])

    const getDatePretty = (date) => {
        const newDate = new Date(date)
        const month = monthNames[newDate.getMonth() + 1]
        const day = newDate.getUTCDate();
        const year = newDate.getUTCFullYear();
        const output = month + ": " + day  + ', ' + year

        return output
    }

    const follow = async () => {
        const response = await followUser(user._id);
    }

    const unfollow = async () => {
        const response = await unfollowUser(user._id);
    }


    if(currentUser !== null) {
        if (user.handle === currentUser.handle){
            if (isCurrent === false)
                setIsCurrent(true)
        }
    }



    return (
        <>
        <div className="row position-relative mb-5">
                <div className="col-5">
                    <img alt="" src={user.profilePic} className="a1-image_146_round a1-pos-profile position-absolute border border-5 border-white m-0 p-0"/>
                </div>
                <div className="col-7 mt-2">
                    {isCurrent ?


                        <Link to="/profile/edit-profile">
                            <button className="a1-bg-blue rounded-pill pt-2 pb-2 ps-3 pe-3 text-white fw-bold float-end me-2 border-0">
                                Edit Profile
                            </button>
                        </Link>
                
                    :   <>
                            {!currentUser ?
                                <div className="mb-5"></div>
                                :
                            isfollowing(followers, currentUser) ?
                                <button className="a1-bg-red rounded-pill pt-2 pb-2 ps-3 pe-3 text-white fw-bold float-end me-2 border-0" onClick={unfollow}>
                                    Unfollow
                                </button>
                                :
                                <button className="a1-bg-blue rounded-pill pt-2 pb-2 ps-3 pe-3 text-white fw-bold float-end me-2 border-0" onClick={follow}>
                                    Follow
                                </button>
                            }     
                        </>
                            
                        }
            

                </div>
            </div>
            <div className="row border-top p-0 m-0">
                <div className="col-6 pb-3 pt-3">
                    <div className="a1-font-16px text-dark a1-font-family mt-1">
                        <i className="fa fa-user me-2"></i>
                        {user.name}
                    </div>
                    <div className="a1-font-16px text-dark a1-font-family mt-1">
                        <i className="fa fa-at me-2"></i>
                        {user.handle}
                    </div>
                    <div className="a1-font-16px text-dark a1-font-family mt-1">
                        {user.favoriteTeam && user.favoriteTeam !== "None" ?
                            <Link className="text-decoration-none text-dark" to={"/teams/"+user.favoriteTeam}>
                                <i className="fa fa-basketball-ball me-2 text-dark"></i>
                                {user.favoriteTeam}
                            </Link>
                            :
                            <>
                                <i className="fa fa-basketball-ball me-2"></i>
                                {user.favoriteTeam}
                            </>
                        }
                    </div>
                    <div className="a1-font-16px text-dark a1-font-family mt-1">
                        <i className="fa fa-birthday-cake me-2"></i>
                        {getDatePretty(user.dateOfBirth)}
                    </div>
                    <div className="a1-font-16px text-dark a1-font-family mt-1">
                        <i className="fa fa-calendar me-2"></i>
                        {getDatePretty(user.dateJoined)}
                    </div>
                    <div className="a1-font-16px text-dark a1-font-family mt-1">
                        <i className="bi bi-geo-alt-fill me-2"></i>
                        {user.location}
                    </div>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-6 m-0 p-0 pt-3">
                            <div className="h4 text-dark a1-font-family fw-bold ms-2">
                                Following : {following.length}
                            </div>
                        </div>
                        <div className="col-6 m-0 p-0 pt-3">
                            <div className="h4 text-dark a1-font-family fw-bold ms-2">
                                Followers : {followers.length}
                            </div>
                        </div>
                    </div>
                    <div className="hw text-dark a1-font-family mt-2 fw-bold text-center">
                        About Me
                    </div>
                    <div className="a1-font-16px text-dark a1-font-family mt-2">
                        {user.bio}
                    </div>
                </div>
            </div>
            <div className='row border-3 border-top border-bottom p-0 m-0 mt-3 pt-2 mb-3 pb-5' >
                <div className='col-6 text-center'>
                    <h5 className='text-dark text-bold a1-font-family'>Followers</h5>
                    <ul className="list-group mt-2 me-2 ms-2">
                        {
                        followers.map((follow,i) => {
                            return (
                                <Link key={i} className='text-decoration-none' to={"/profile/"+follow.follower.handle}>
                                    <li className="list-group-item m-0" key={i}>
                                        {follow.follower.handle}
                                    </li>
                                </Link>
                            )
                        })
                        }
                    </ul>
                </div>

                <div className='col-6 text-center w-50'>
                    <h5 className='text-dark text-bold a1-font-family'>Following</h5>
                    <ul className="list-group mt-2 me-2 ms-2">
                        {
                    following.map((follow,i) => {
                        return ( 
                            <Link key={i} className='text-decoration-none' to={"/profile/"+follow.followed.handle}>
                                <li className="list-group-item m-0">
                                    {follow.followed.handle}
                                </li>
                            </Link>
                            )
                        })
                        }
                    </ul>     
                </div>
            </div>
            </>
    )
}

export default Followers;