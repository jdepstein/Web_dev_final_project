import ForumTitle from "../../components/forum-title";
import CreatePost from "../../create-post";
import ForumItem from "../../forum/forum-item";
import {useParams} from "react-router";

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {findTeamPostsThunk}
    from "../../thunks/posts-thunks";

function TeamForumPage() {
    const dispatch = useDispatch();
    const { teamName } = useParams();
    const {posts} = useSelector(state => state.postData)
    useEffect(() => {
        dispatch(findTeamPostsThunk(teamName.toLowerCase()))
    }, [])
    return (



            <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                <ForumTitle/>
                <CreatePost data={{"from_team" : teamName} }/>
                {
                    posts.map((post, i) =>
                        <ForumItem key={post._id} post={post}/>
                    )
                }
            </div>

    );
}
export default TeamForumPage;