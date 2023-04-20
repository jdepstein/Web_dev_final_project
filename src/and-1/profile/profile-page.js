import CreatePost from "../create-post";
import ForumSummaryItem from "../forum-summary/forum-summary-item";
import { useNavigate } from "react-router-dom";
import Followers from "./followers";
import Likes from "./likes";

import {findUserPostsThunk}
    from "../thunks/posts-thunks";


import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useState} from "react";
import { getFollowers, getFollowing } from "../services/follow-service";
import ProfileStats from "./profile-stats";
import { getLikedPlayers } from "../services/playerLike-service";
import { Navigate } from "react-router-dom";
import { findTeamsThunk } from "../thunks/teams-thunks";
import { updateUserThunk } from "../thunks/users-thunks";
import { profileThunk } from "../thunks/users-thunks";


function ProfilePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const {currentUser} = useSelector(state => state.UserData)
    const [profile, setProfile] = useState(currentUser)
    const {teams} = useSelector(state => state.teamData)
    const [likedPlayers, setLikedPlayers] = useState([]);
    const {posts} = useSelector(state => state.postData)
    const [isEdditing, setIsEdditing] = useState(false);

    useEffect(() => {
        findTeamsThunk()
        dispatch(profileThunk()).then((response) => {
            if (response.payload._id !== undefined && isEdditing === false) {
                dispatch(findUserPostsThunk(currentUser.handle))
                fetchFollowers();
                fetchFollowing();
                fetchLikes();
                console.log(response.payload)
            }
        }).catch(err => {})
        
    }, [isEdditing,
         currentUser ? currentUser.bio : null,
         currentUser ? currentUser.location : null,
         currentUser ? currentUser.favoriteTeam : null,
         currentUser ? currentUser.dateOfBirth : null,
         currentUser ? currentUser.email : null,
         currentUser ? currentUser.name : null])

    if (!currentUser) {
        return (<Navigate to="/login"/>)
    }
    
    

    const fetchFollowers = async () => {
        const response = await getFollowers(currentUser._id);
        setFollowers(response);
    }

    const fetchFollowing = async () => {
        const response = await getFollowing(currentUser._id);
        setFollowing(response);
    }

    const fetchLikes = async () => {
        const response = await getLikedPlayers(currentUser._id);
        setLikedPlayers(response);
    }
    const setEdit = () => {
        setIsEdditing(!isEdditing)
    }

    const updateUserName = (target) => {setProfile({...profile,  name: target})}
    const updateUserLocation = (target) => {setProfile({...profile, "location": target})}
    const updateUserBio = (target) => {setProfile({...profile, "bio": target})}
    const updateUserTag = (target) => {setProfile({...profile, "favoriteTeam": target})}
    const updateUserDateOfBirth = (target) => {setProfile({...profile, "dateOfBirth": target})}
    const updateUserEmail = (target) => {setProfile({...profile, "email": target})}
    const updateProfileHandler = async () => {
        dispatch(updateUserThunk(profile)).then((response) => {
            setIsEdditing(!isEdditing)
        })
    }   
    
  

    return (
        <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center p-0 m-0">
            {currentUser !== null ?
                <>
                    {currentUser._id !== undefined && 
                    <>
                        {isEdditing ?
                        <>
                        <div className="h5 text-dark a1-font-family fw-bold mt-3 mb-3 ms-2">
                            <span>
                            Editing Profile
                            </span>
                            <button onClick={setEdit} className="a1-bg-red rounded-pill pt-1 pb-1 ps-2 pe-2 text-white fw-bold float-end me-2 border-0">
                                       Cancel
                            </button>                         
                            </div>
                            <div className="">
                                <img alt="" src={profile.banner} className="opacity-50 a1-banner w-100"/>
                                <div className="row position-relative">
                                    <div className="col-5 mb-5">
                                        <img alt="" src={profile.profilePicture} className="opacity-50 a1-image_146_round a1-pos-profile position-absolute border border-5 border-white m-0 p-0"/>
                                    </div>
                                    <div className="col-7 mt-2">
                                            <button className="a1-bg-blue rounded-pill pt-2 pb-2 ps-3 pe-3 text-white fw-bold float-end me-2 border-0"
                                                    onClick={updateProfileHandler}>
                                                Save
                                            </button>
                                    </div>
                            </div>
                            <div className="ms-4 mt-5 row">
                                <div className="col-6">
                                    <label className="form-label" htmlFor="name">Name</label>
                                    <input id="name" className="form-control w-50 mb-4" value={profile.name}
                                        onChange={(e) => updateUserName(e.target.value)}
                                    ></input>

                                    <label className="form-label" htmlFor="location"> Location</label>
                                    <input id="location" className="form-control w-50 mb-4" value={profile.location}
                                        onChange={(e) => updateUserLocation(e.target.value)}>
                                    </input>

                                    <label className="form-label" htmlFor="DOB"> Date of Birth</label>
                                    <input type="date" id="DOB" className="form-control w-50 mb-4"
                                        onChange={(e) => updateUserDateOfBirth(e.target.value)}
                                    ></input>

                                </div>
                                <div className="col-6">
                                    <label className="form-label" htmlFor="Bio"> Bio </label>
                                    <textarea id="Bio" className="form-control w-75 mb-4" value={profile.bio}
                                        onChange={(e) => updateUserBio(e.target.value)}
                                    ></textarea>
                                    <label className="form-label" htmlFor="email"> email</label>
                                    <input  id="email" className="form-control w-50 mb-4" value={profile.email}
                                        onChange={(e) => updateUserEmail(e.target.value)}
                                    ></input>
                                     <label className="form-label" htmlFor="FavoriteTeam"> Favorite Team</label>
                                        <select  className="form-control w-50 shadow-none mt-3"
                                         onChange={(e) => updateUserTag(e.target.value)}>
                                        {
                                            teams.map(team =>
                                                {
                                                    if (profile.FavoriteTeam === undefined) {
                                                        return(
                                                            <option key={team.name} value={team.name}>
                                                                {team.name}
                                                            </option>
                                                        )
                                                    }
                                                    if (team.name === profile.FavoriteTeam.toLowerCase()) {
                                                        return(
                                                            <option key={team.name} selected value={team.name}>
                                                                {team.name}
                                                            </option>
                                                        )
                                                    }
                                                    else {
                                                        return(
                                                            <option key={team.name} value={team.name}>
                                                                {team.name}
                                                            </option>
                                                        )
                                                    }
                                                }
                                            )
                                        }
                                        <option value="general">
                                            No Favorite
                                        </option>
                                    </select>
                                </div>
                            </div>
                            </div>
                        </>
                        :
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
                                    <button onClick={setEdit} className="a1-bg-blue rounded-pill pt-2 pb-2 ps-3 pe-3 text-white fw-bold float-end me-2 border-0">
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                            <ProfileStats data={{"user" : currentUser, "followers" : followers, "following" :following}}/>
                            <Followers data = {{"followers" : followers, "following" : following}}/>
                            <Likes likes={likedPlayers}/>
                            <CreatePost/>
                            {
                                posts.map((post, i) =>
                                    <ForumSummaryItem key={i} post={post}/>
                                )
                            }
                        </>
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