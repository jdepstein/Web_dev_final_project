import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useState} from "react";


import {findUserPostsThunk}from "../thunks/posts-thunks";
import {findUserThunk} from "../thunks/users-thunks"; 
import { followUser, unfollowUser} from "../services/follow-service";
import {isfollowing } from "../helper-funcs";
import { getFollowers, getFollowing } from "../services/follow-service";
import CreatePost from "../create-post";
import ForumSummaryItem from "../forum-summary/forum-summary-item";
import ProfilePage from "./profile-page";
import ProfileStats from "./profile-stats";
import Followers from "./followers";





function OtherProfilePage() {
    
    const {handle} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {posts} = useSelector(state => state.postData)
    const {user, currentUser} = useSelector(state => state.UserData)
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const [isCurrent, setIsCurrent] = useState(false);

    useEffect(() => {
        let ignore = false;
        dispatch(findUserThunk(handle)).then(() => {
            fetchFollowers();
            fetchFollowing();
            if (!ignore) {
                if (user !== undefined){
                    if( user !== []) {
                        if (user.role === "team"){
                            navigate("/teams/" + user.handle)
                        }
                    }
                }
            }
        });
        return () => {
          ignore = true;
        }
    }, [user.handle])

    useEffect(() => {
        dispatch(findUserPostsThunk(handle))
    }, [])


    if(currentUser !== null) {
        if (handle === currentUser.handle){
            if (isCurrent === false)
                setIsCurrent(true)
        }
    }

    const fetchFollowers = async () => {
        if (user !== undefined && user._id !== undefined){ 
            const response = await getFollowers(user._id);
            setFollowers(response);
        }
    }

    const fetchFollowing = async () => {
        if (user !== undefined && user._id !== undefined){ 
            const response = await getFollowing(user._id);
            setFollowing(response);
        }
    }

    const follow = async () => {
        if (user !== undefined && user._id !== undefined){ 
            await followUser(user._id);
            window.location.reload()
        }
    }

    const unfollow = async () => {
        if (user !== undefined && user._id !== undefined){ 
            await unfollowUser(user._id);
            window.location.reload()
        }
    }
    return (
        <>
            {isCurrent ? 
                <ProfilePage handle={currentUser.handle}/>
                :
                <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center p-0 m-0">
                    {user !== null ?
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
                                <div className="row position-relative mb-5">
                                    <div className="col-5">
                                        <img alt="" src={user.profilePic} className="a1-image_146_round a1-pos-profile position-absolute border border-5 border-white m-0 p-0"/>
                                    </div>
                                    <div className="col-7 mt-2">
                                        { !currentUser ?
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
                                    </div>
                                </div>
                                <ProfileStats data={{"user" : user, "followers" : followers, "following" :following}}/>
                                <Followers data = {{"followers" : followers, "following" :following}}/>
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
            }
        </>
    );

}

export default OtherProfilePage;