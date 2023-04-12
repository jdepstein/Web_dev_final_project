import {Link} from "react-router-dom";
import CreatePost from "../create-post";
import ForumSummaryItem from "../forum-summary/forum-summary-item";


import {findUserPostsThunk}
    from "../thunks/posts-thunks";

import {findUserThunk, updateUserThunk} from "../thunks/users-thunks"; 

import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";



function ProfilePage() {

    const {posts, loading} = useSelector(
        state => state.postData)
    const dispatch = useDispatch();

    let isCurrent = false
    const {handle} = useParams();
    
    let logged = true;
    let {user, currentUser} = useSelector( 
        state => state.UserData
    )
    useEffect(() => {
        dispatch(findUserThunk(handle))
        dispatch(findUserPostsThunk(handle))
    },  [])
    if (handle === currentUser.handle){
        isCurrent = true
    }

    if (handle === undefined) {
        user =  currentUser
        isCurrent = true
    }



    

    return (
        <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center p-0 m-0">
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
                    {isCurrent ?

                        <Link to="/profile/edit-profile">
                            <button className="a1-bg-blue rounded-pill pt-2 pb-2 ps-3 pe-3 text-white fw-bold float-end me-2">
                                Edit Profile
                            </button>
                        </Link>
                
                    :   <>
                            {user.followed  && logged ?
                                <button className="a1-bg-blue rounded-pill pt-2 pb-2 ps-3 pe-3 text-white fw-bold float-end me-2"
                                    
                                    onClick={() => dispatch(updateUserThunk( 
                                        {   ...user,
                                            followed : false,
                                            followers : user.followers - 1
                                        }))
                                        }>
                                    Unfollow
                                </button>
                                :
                                <button className="a1-bg-blue rounded-pill pt-2 pb-2 ps-3 pe-3 text-white fw-bold float-end me-2"
                                    onClick={() => dispatch(updateUserThunk(
                                        {   ...user,
                                            followed : true,
                                            followers : user.followers + 1
                                        }))
                                        }>
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
                        <i className="fa fa-basketball-ball me-2"></i>
                        {user.FavoriteTeam}
                    </div>
                    <div className="a1-font-16px text-dark a1-font-family mt-1">
                        <i className="fa fa-birthday-cake me-2"></i>
                        user.dateOfBirth.$date
                    </div>
                    <div className="a1-font-16px text-dark a1-font-family mt-1">
                        <i className="fa fa-calendar me-2"></i>
                        user.dateJoined.$date
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
                                Following : {user.following}
                            </div>
                        </div>
                        <div className="col-6 m-0 p-0 pt-3">
                            <div className="h4 text-dark a1-font-family fw-bold ms-2">
                                Followers : {user.followers}
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
            {isCurrent && <CreatePost/>}
            {
                posts.map((post, i) =>
                    <ForumSummaryItem key={i} post={post}/>
                )
            }

        </div>

    );

}

export default ProfilePage;