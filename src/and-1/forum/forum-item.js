import {updatePostThunk} from "../thunks/posts-thunks";
import {deletePostThunk} from "../thunks/posts-thunks";

import {useDispatch} from "react-redux";


function ForumItem(
        post = {
             comments : 0,
             likeDislike : 0,
             liked: null,
             post_content: "String",
             post_type: "String",
             profilePic : "String",
             share: 0,
             tag: "String",
             tagColor: "String",
             timestamp: new Date(),
            title: "String",
            userHandle: "String",
            _id: "642b3464feea95a346a7fd8e",
    })
    {
    const dispatch = useDispatch()
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
                        <img alt="" src={post.profilePic} className="a1-profile-pic ms-4"/>
                </div>
                <div className="col-10 col-xl-11">
                    <div>{post.post_content}</div>
                </div>
            </div>
            <div className="mb-1 text-center fw-bold mt-2 mb-2">
                Posted: {post.userHandle} {post.timestamp + " "}
                <span className={"flex-wrap text-inline rounded-pill fw-bold text-white a1-width-content text-center ps-3 pe-3 pt-1 pb-1 " + post.tagColor}>{post.tag}</span>
            </div>
            <div className="row border-top border-3 p-0 m-0 pt-2">
                <div className="col-2 p-0"></div>
                <div className="col-1 p-0">
                    {
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
                    <i className="h4 text-black fa fa-ellipsis-h p-0"
                       onClick={() => deletePostHandler(post._id)}></i>
                </div>
                <div className="col-2 p-0"></div>
            </div>
        </div>
    );
}

export default ForumItem;