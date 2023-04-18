import {Link} from "react-router-dom";
import CreatePost from "../create-post";
import ForumSummaryItem from "../forum-summary/forum-summary-item";
import { useNavigate } from "react-router-dom";
import {useLocation} from "react-router-dom";


import {findUserPostsThunk}
    from "../thunks/posts-thunks";


import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useState} from "react";
import { getFollowers, getFollowing } from "../services/follow-service";
import ProfileStats from "./profile-stats";
import Followers from "./followers";


function ProfilePage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const {posts} = useSelector(state => state.postData)
    const {currentUser} = useSelector(state => state.UserData)
    const {pathname} = useLocation()
    useEffect(() => {
        if (currentUser !== null){
            dispatch(findUserPostsThunk(currentUser.handle))
            fetchFollowers();
            fetchFollowing();
        }
        
    }, [currentUser])

    if (currentUser === null) {
        navigate("/login")
    }
    else if(currentUser !== null && currentUser.role === "team") {
        navigate("/teams/" + currentUser.handle)
    }
  

    const fetchFollowers = async () => {
        const response = await getFollowers(currentUser._id);
        setFollowers(response);
    }

    const fetchFollowing = async () => {
        const response = await getFollowing(currentUser._id);
        setFollowing(response);
    }
    
  

    return (
        <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center p-0 m-0">
            {currentUser !== null ?
                <>
                    {currentUser._id !== undefined && 
                    <>   
                        <div className="justify-content-center h3 text-dark a1-font-family fw-bold mt-2 mb-0 ms-2">
                            {currentUser.name}
                        </div>
                        <div className="justify-content-center a1-font-16px text-dark a1-font-family m-0 p-0 ms-2">
                            <i className="fa fa-at"></i>
                            {currentUser.handle}
                        </div>
                        <img alt="" src={currentUser.banner} className="a1-banner w-100"/>

                        <div className="row position-relative mb-5">
                            <div className="col-5">
                                <img alt="" src={currentUser.profilePic} className="a1-image_146_round a1-pos-profile position-absolute border border-5 border-white m-0 p-0"/>
                            </div>
                            <div className="col-7 mt-2">
                                <Link to="/profile/edit-profile">
                                    <button className="a1-bg-blue rounded-pill pt-2 pb-2 ps-3 pe-3 text-white fw-bold float-end me-2 border-0">
                                        Edit Profile
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <ProfileStats data={{"user" : currentUser, "followers" : followers, "following" :following}}/>
                        <Followers data = {{"followers" : followers, "following" :following}}/>
                        <CreatePost/>
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