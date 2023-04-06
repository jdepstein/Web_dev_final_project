import ForumTitle from "../../components/forum-title";
import CreatePost from "../../create-post";
import ForumItem from "../../forum/forum-item";
import {useParams} from "react-router";

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {findTeamPostsThunk}
    from "../../thunks/posts-thunks";

function TeamForumPage() {
    const { teamName } = useParams();
    const {posts, loading} = useSelector(
        state => state.postData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTeamPostsThunk(teamName))
    }, [])


    return (


            <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                <ForumTitle/>
                <CreatePost/>
                {
                    posts.map((post, i) =>
                        <ForumItem key={post._id} post={post}/>
                    )
                }
            </div>

    );
}
export default TeamForumPage;