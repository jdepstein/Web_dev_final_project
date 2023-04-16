import {Link} from "react-router-dom";
import CreatePost from "../create-post";
import ForumSummaryItem from "../forum-summary/forum-summary-item";
import { useNavigate } from "react-router-dom";
import Followers from "./followers";


import {findUserPostsThunk}
    from "../thunks/posts-thunks";

import {findUserThunk} from "../thunks/users-thunks"; 

import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useState} from "react";
import { followUser, unfollowUser} from "../services/follow-service";



function ProfilePage() {
    

    const {handle} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isCurrent, setIsCurrent] = useState(false)
    const {posts} = useSelector(state => state.postData)
    let {user, currentUser} = useSelector(state => state.UserData)

    useEffect(() => {
        dispatch(findUserThunk(handle))
        if (handle === undefined) 
            dispatch(findUserPostsThunk(currentUser.handle))
        else
            dispatch(findUserPostsThunk(handle))
    
    }, [handle])

    if (handle === undefined){
        user = currentUser
        if (isCurrent === false)
            setIsCurrent(true)
    }
    if (user !== undefined){
        if (user.role === "team"){
            navigate("/teams/" + user.handle)
        }
    }

    if(currentUser !== null && isCurrent === false) {
        if (handle === currentUser.handle){
            if (isCurrent === false)
                setIsCurrent(true)
        }
        else if  (currentUser.role === "team" && isCurrent === true){
            navigate("/teams/" + currentUser.handle)
        }

     
    }

    return (
        <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center p-0 m-0">
            {user !== undefined ?
                <>
                    {user._id !== undefined && 
                    <>   
                        <div className="justify-content-center h3 text-dark a1-font-family fw-bold mt-2 mb-0 ms-2">
                            {user.name}
                        </div>
                        <div className="justify-content-center a1-font-16px text-dark a1-font-family m-0 p-0 ms-2">
                            <i className="fa fa-at"></i>
                            {user.handle}
                        </div>
                        <img alt="" src={user.banner} className="a1-banner w-100"/>
                        <Followers passeduser={user}/>
                        {isCurrent && <CreatePost/>}
                        {
                            posts.map((post, i) =>
                                <ForumSummaryItem key={i} post={post}/>
                            )
                        }
                     </>
                    }
                </>
                :
                <></>
            }
        </div>
    );

}

export default ProfilePage;