import {Link} from "react-router-dom";

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

import {createPostThunk}
    from "../thunks/posts-thunks";

import {findTeamsThunk} from "../thunks/teams-thunks";
import {useParams} from "react-router-dom";


function CreateComponent() {

    const {from_team, pid} = useParams();
    let [newPostTitle, setNewPostTitle] = useState('');
    let [newPostTitleText, setNewPostText] = useState('');
    let [newPostTitleTag, setNewPostTag] = useState('general::a1-bg-red');
    let [isteam, setIsteam] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {teams} = useSelector(state => state.teamData)
    const {currentUser} = useSelector( state => state.UserData)
    
    useEffect(() => {
        let ignore = false;
        dispatch(findTeamsThunk()).then(result => {
            if (!ignore) {
                if (!currentUser){
                    navigate("/login")
                } 
                if (currentUser){
                    if (currentUser.role === "team"){
                        setIsteam(true)}
                    
                    else if (currentUser.role === "admin"){
                        alert("admins cannot make posts")
                        navigate("/forum")
                    }   
                }        
            }
        });
        return () => {
          ignore = true;
        };
    }, [])
    const newPostHandler = () => {



        const tag_and_color = newPostTitleTag.split("::")
        const newPost = {
            title: newPostTitle,
            post_content: newPostTitleText,
            tag: tag_and_color[0],
            tagColor: tag_and_color[1],
            profilePic: currentUser.profilePic,
            userHandle: currentUser.handle,
            player : pid
        }
        dispatch(createPostThunk(newPost));
        setNewPostTitle("");
        setNewPostText("");
        setNewPostTag("");
        
    }

    return (
        <>
            { currentUser !== null && !teams.name && teams &&

                <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 wd-bg-off-white border-start border-end align-content-center ps-2 pe-2">
                    <div className="text-center h2 mt-2 mb-2 "> Create Post </div>
                        <input placeholder="title" className=" mb-2 mt-3 w-100 form-control shadow-none border-1 border-dark"
                            onChange={(event) => setNewPostTitle(event.target.value)}>

                        </input><br/>
                        <textarea placeholder="Enter your post content" className= "ps-2 w-100 rounded-3 a1-text-area border border-1 border-dark"
                                onChange={(event) => setNewPostText(event.target.value)} /><br/>
                        <div className="row p-0 m-0">
                            <div className="col-8">
        
                                    <select className="form-control w-25 shadow-none mt-3"
                                            onChange={(event) => setNewPostTag(event.target.value.toLowerCase())}>
                                        {<option defaultValue  value="general::a1-bg-red">
                                            general
                                        </option>}
                                        {
                                            teams.map(team =>
                                                {
                                                if (isteam && team.name === currentUser.handle){
                                                    return (<option key={team.name} value={team.name + "::" + team.colors}>
                                                                {team.name}
                                                            </option>)

                                                }
                                                else if (from_team !== "None" && team.name.toLowerCase() === from_team){
                                                    return (<option key={team.name} value={team.name + "::" + team.colors}>
                                                                {team.name}
                                                            </option>)
                                                }
                                                else if (!isteam && from_team === "None"){
                                                    return (<option key={team.name} value={team.name + "::" + team.colors}>
                                                                {team.name}
                                                            </option>)
                                                }
                                            }
                                            )
                                        }
                                    </select>
                            </div>
                            <div className="col-4">
                                <Link to="/home"><button className="rounded-pill text-white fw-bold h5 a1-bg-red m-1 ps-3 pe-3 pt-2 pb-2 float-end border-0">Cancel</button></Link>
                                <Link to="/home"><button  onClick={newPostHandler} className="rounded-pill text-white fw-bold h5 a1-bg-blue m-1  ps-3 pe-3 pt-2 pb-2 float-end border-0">Post</button></Link>
                            </div>
                        </div>
                    </div>
                            
                 }
            </>
    );
}

export default CreateComponent;