import SearchBar from "../components/search-bar";
import ForumTitle from "../components/forum-title";
import CreatePost from "../create-post";
import ForumItem from "./forum-item";

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {findPostsThunk, findTeamPostsThunk, findUserPostsThunk}
    from "../thunks/posts-thunks";
import { useParams } from "react-router";


function ForumPage() {

    const { topic } = useParams();
    const {posts, loading} = useSelector(state => state.postData)
    const dispatch = useDispatch();


    useEffect(() => {
        if (topic === undefined) {
            dispatch(findPostsThunk())
        }
        else if (topic[0] === '@') {
            dispatch(findUserPostsThunk(topic.substring(1)))
        } 
        else {
            dispatch(findTeamPostsThunk(topic.toLocaleLowerCase())) 
            }
    }, [topic])
    return (
        <>
            {!loading &&
                <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                    <SearchBar/>
                    <ForumTitle/>
                    <CreatePost/>
                    {
                        posts.map((post, i) =>
                            <ForumItem key={i} post={post}/>
                        )
                    }
                </div>
            }
        </>

    );
}

export default ForumPage;