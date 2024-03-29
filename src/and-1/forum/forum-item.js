import {updatePostThunk} from "../thunks/posts-thunks";
import {deletePostThunk} from "../thunks/posts-thunks";
import {Link} from "react-router-dom";

import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import { getDatePretty } from "../helper-funcs";



function ForumItem(
        post = {
             comments : 0, likeDislike : 0, liked: null, post_content: "String", post_type: "String",
             profilePic : "String", share: 0,  tag: "String", tagColor: "String", timestamp: new Date(),
             title: "String", userHandle: "String", _id: "642b3464feea95a346a7fd8e", }){    

    const dispatch = useDispatch()
    const {currentUser} = useSelector( state => state.UserData)
    post = post.post


    const deletePostHandler = (id) => {
        dispatch(deletePostThunk(id));
     }

    
    return (
        <div className="mb-1">
            <div className="border-3 h5 text-center border-bottom pb-2 pt-3">
                {post.title + "  "}
            </div>
            <div className="row border-3 p-0 m-0">
                <div className="col-2 col-xl-1 p-0 m-0 text-center">
                       <Link to={`/profile/`+ post.userHandle}> <img alt="" src={"../../" + post.profilePic} className="a1-profile-pic ms-4"/> </Link>
                </div>
                <div className="col-10 col-xl-11">
                    <div className="ms-3">{post.post_content}</div>
                </div>
            </div>
            <div className="mb-1 text-center fw-bold mt-2 mb-2">
                Posted: {post.userHandle} {getDatePretty(post.timestamp) + " "}
                {post.tag !== "general" ?
                    <Link className="text-decoration-none" to={`/teams/${post.tag}`}><span className={"flex-wrap text-inline rounded-pill fw-bold text-white a1-width-content text-center ps-3 pe-3 pt-1 pb-1 me-1 " + post.tagColor}>{post.tag}</span></Link>
                    :
                    <span className={"flex-wrap text-inline rounded-pill fw-bold text-white a1-width-content text-center ps-3 pe-3 pt-1 pb-1 me-1 " + post.tagColor}>{post.tag}</span>
                }
                {post.player !== -1 && post.player !== "undefined" && post.player !== undefined && post.player !== null ? 
                    <Link className="text-decoration-none" to={`/players/player/${post.player}`}><span className={"flex-wrap text-inline rounded-pill fw-bold text-white a1-width-content text-center ps-3 pe-3 pt-1 pb-1 " + post.tagColor}>{post.player}</span></Link>
                    :
                    <></> 
                }

            </div>
            <div className="row border-top border-3 p-0 m-0 pt-2">
                <div className="col-2 p-0"></div>
                <div className="col-1 p-0">
                    {   
                        !currentUser ?
                            <> Likes: </>
                        :
                        post.liked === null ?
                            <i className="h3 text-black fa fa-arrow-up"onClick={() => dispatch(updatePostThunk({
                                ...post, liked: true, likeDislike: post.likeDislike + 1}))}></i>
                        : post.liked === true ?
                            <i className="h3 a1-text-red fa fa-arrow-up"onClick={() => dispatch(updatePostThunk({
                                ...post, liked: null, likeDislike: post.likeDislike - 1}))}></i>
                        :
                            <i className="h3 text-black fa fa-arrow-up"onClick={() => dispatch(updatePostThunk({
                                ...post, liked: true, likeDislike: post.likeDislike + 2}))}></i>
                    }
                </div>
                <div className="col-1 p-0">
                    <p className="fw-bold p-0">{post.likeDislike}</p>
                </div>
                <div className="col-1 p-0">
                    {
                        !currentUser ?
                            <>  </>
                        :
                        post.liked === null ?
                            <i className="h3 text-black fa fa-arrow-down"onClick={() => dispatch(updatePostThunk({
                                ...post, liked: false, likeDislike: post.likeDislike - 1}))}></i>
                        : post.liked === true ?
                            <i className="h3 text-black fa fa-arrow-down"onClick={() => dispatch(updatePostThunk({
                                ...post, liked: false, likeDislike: post.likeDislike - 2}))}></i>
                        :
                            <i className="h3 a1-text-red fa fa-arrow-down"onClick={() => dispatch(updatePostThunk({
                                ...post, liked: null, likeDislike: post.likeDislike + 1 }))}></i>
                }
                </div>
                <div className="col-2 p-0 text-center">
                    <i className="h5 fw-normal text-black fa fa-comment me-1 p-0"></i>
                    {post.comment}
                </div>
                <div className="col-2 p-0 text-center">
                    <i className="h5 text-black fa fa-share me-1 p-0"></i>
                    {post.share}
                </div>
                <div className="col-1 p-0">
                    {
                        !currentUser || currentUser.handle !== post.userHandle ?
                            <i className="h4 text-black fa fa-ellipsis-h p-0"></i>
                        :
                            <i className="h4 text-black fa fa-ellipsis-h p-0"
                                onClick={() => deletePostHandler(post._id)}></i>
                    }
                </div>
                <div className="col-2 p-0"></div>
            </div>
        </div>
    );
}

export default ForumItem;