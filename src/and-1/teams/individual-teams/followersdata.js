import React, { useState, useEffect } from 'react';
import { getFollowers, getFollowing } from '../../services/follow-service';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../../services/follow-service';



function FollowersTeam(passeduser){
    const  user = passeduser.passeduser
    const [followers, setFollowers] = useState([]);

    const fetchFollowers = async (user) => {
        const response = await getFollowers(user._id);
        setFollowers(response);
    }

    useEffect(() => {
        fetchFollowers(user);
    }
    , [])
    return (
        <>
            <span className="me-2 ms-2 text-secondary">Followers: </span> {followers.length} 
            <div className='text-center'>
                <h5 className='text-dark text-bold a1-font-family'>Followers</h5>
                <ul className="list-group mt-2 me-5 ms-5 ps-5 pe-5">
                    {
                    followers.map((follow,i) => {
                        return (
                            <Link key={i} className='text-decoration-none me-5 ms-5 ps-5 pe-5' to={"/profile/"+follow.follower.handle}>
                                <li className="list-group-item ms-5 me-5 " key={i}>
                                    {follow.follower.handle}
                                </li>
                            </Link>
                        )
                    })
                    }
                </ul>
            </div>
        </>
    )   
}

export default FollowersTeam;

