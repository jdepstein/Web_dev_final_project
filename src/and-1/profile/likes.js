import React from 'react';
import { Link } from 'react-router-dom';

function Likes(likes) {
    likes = likes.likes
    return (
        <div className='border-2 border-bottom mb-2 pb-3'>
            <h5 className='text-dark text-bold a1-font-family text-center'>Likes the Players </h5>
            <ul className="list-group mt-2 me-2 ms-2">
                {
                    likes.map((like,i) => {
                        return ( 
                            <Link key={i} className='text-decoration-none' to={"/players/player/"+like.player.pid}>
                                <li className="list-group-item m-0">
                                    {like.player.name}
                                </li>
                            </Link>
                            )
                        })
                }
            </ul>     
        </div>

    );
}

export default Likes;