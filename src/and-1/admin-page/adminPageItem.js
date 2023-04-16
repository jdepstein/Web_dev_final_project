import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteUserThunk } from '../thunks/users-thunks'
import {deleteTeamThunk} from '../thunks/teams-thunks'
import {deleteAllTeamsPostsThunk, deleteAllUsersPostsThunk} from '../thunks/posts-thunks'


function AdminPageItem (user = 
    {
        _id         : "64342989bf74603b6dbc4779",
        email       : "test123@email.com",
        name        : "Johnson",
        password    : "123",
        profilePic  : "../images/profile1.jpeg",
        bio         : "Here is my Bio",
        location    : "Boston, MA",
        dateJoined  :  "2023-04-10T15:21:45.315Z",
        dateOfBirth : "2011-01-11T00:00:00.000Z",
        following   : 10,
        followers   : 1000,
        followed    : false,
        handle      : "test123",
        banner      : "../images/background2.jpeg",
        test        : "test",
        role        : "user",
        __v         : 0,
        favoriteTeam: "Warriors"
      })
    
    {
        
    const dispatch = useDispatch();
    user = user.user
    
    const deleteUserHandler = (passed_user) =>
    {
        if (passed_user.role === "team") {
            dispatch(deleteTeamThunk(passed_user.handle[0].toUpperCase() + passed_user.handle.substring(1)))
            dispatch(deleteAllTeamsPostsThunk(user.handle.toLowerCase()))
        }
        dispatch(deleteUserThunk(passed_user._id))
        dispatch(deleteAllUsersPostsThunk(passed_user.handle))
        window.location.reload()
    }


    return (
        <>
            <li className="list-group-item m-0">
                <div className="row p-0 m-0">
                    <div className="col-5">
                        <h5>{user.handle}</h5>
                    </div>
                    <div className="col-2">
                        <h5>{user.role}</h5>
                    </div>
                    <div className="col-5">
                        <button type="button" className="float-end me-2 a1-bg-red rounded-pill ps-3 pe-3 pt-2 pb-2 border-0"
                            onClick={() => deleteUserHandler(user)}>
                                Delete User
                        </button>
                    </div>
                </div>
            </li>
        </>

        
    )
}

export default AdminPageItem
