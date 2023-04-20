import React from 'react';
import { Link } from 'react-router-dom';

function Followers(data = {followers : {}, following : {}})
{    
    const followers = data.data.followers;
    const following = data.data.following;
    return (
        <div className='row border-3 border-top border-bottom p-0 m-0 mt-3 pt-2 mb-3 pb-5' >
            <div className='col-6 text-center'>
                <h5 className='text-dark text-bold a1-font-family'>Followers</h5>
                <ul className="list-group mt-2 me-2 ms-2">
                    {
                    followers.map((follow,i) => {
                        return (
                            follow.follower.role === "team" ?

                            <Link key={i} className='text-decoration-none' to={"/teams/"+follow.follower.handle}>
                                 <li className="list-group-item m-0" key={i}>
                                {follow.follower.handle}
                                    </li>
                             </Link>
                            :
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
                        follow.followed.role === "team" ?

                        <Link key={i} className='text-decoration-none' to={"/teams/"+follow.followed.handle}>
                             <li className="list-group-item m-0" key={i}>
                            {follow.followed.handle}
                                </li>
                         </Link>
                        :
                        <Link key={i} className='text-decoration-none' to={"/profile/"+follow.followed.handle}>
                            <li className="list-group-item m-0" key={i}>
                                {follow.followed.handle}
                            </li>
                        </Link>    
                    )
                    })
                    }
                </ul>     
            </div>
        </div>
    )
}

export default Followers;