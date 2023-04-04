import {all_teams, get_team} from "../helper-funcs";
import {Link} from "react-router-dom";

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {createPostThunk}
    from "../thunks/posts-thunks";



function CreateComponent() {
    let [newPostTitle, setNewPostTitle] = useState('');
    let [newPostTitleText, setNewPostText] = useState('');
    let [newPostTitleTag, setNewPostTag] = useState('celtics::a1-bg-celtics');
    const dispatch = useDispatch();
    const newPostHandler = () => {
        const tag_and_color = newPostTitleTag.split("::")
        const newPost = {
            title: newPostTitle,
            post_content: newPostTitleText,
            tag: tag_and_color[0],
            tagColor: tag_and_color[1],
            profilePic: "../../images/profile6.jpeg",
            userHandle: "@NbaWatcher234",
        }
        dispatch(createPostThunk(newPost));
        setNewPostTitle("");
        setNewPostText("");
        setNewPostTag("");
    }

    return (
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
                            {
                                all_teams().map(team =>
                                    <option key={team.name} value={team.name + "::" + team.colors}>
                                        {team.name}
                                    </option>
                                )
                            }
                            <option value="general">
                                general
                            </option>
                        </select>
                    </div>
                    <div className="col-4">
                        <Link to="/home"><button className="rounded-pill text-white fw-bold h5 a1-bg-red m-1 ps-3 pe-3 pt-2 pb-2 float-end">Cancel</button></Link>
                        <Link to="/home"><button  onClick={newPostHandler} className="rounded-pill text-white fw-bold h5 a1-bg-blue m-1  ps-3 pe-3 pt-2 pb-2 float-end">Post</button></Link>
                    </div>
                </div>
        </div>
    );
}

export default CreateComponent;