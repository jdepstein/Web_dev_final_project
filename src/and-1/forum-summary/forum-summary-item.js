import {updatePostThunk} from "../thunks/posts-thunks";
import {deletePostThunk} from "../thunks/posts-thunks";
import {useSelector} from "react-redux";

import {useDispatch} from "react-redux";

function ForumSummaryItem(
    post =
        {
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
        }
)
 {
     const dispatch = useDispatch()
     post = post.post
     const deletePostHandler = (id) => {
         dispatch(deletePostThunk(id));
     }

     const {currentUser} = useSelector( 
        state => state.UserData
    )

     return (
        <div className="row border-3 border-top border-bottom p-0 m-0 pt-3 ps-1 pe-1 pb-1">
                <div className="col-1">
                    {
                        !currentUser ?
                            <i className="h3 text-black fa fa-arrow-up"></i>
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
                <div className="col-1">
                    <p className="fw-bold">{post.likeDislike}</p>
                </div>
                <div className="col-1">
                    {   
                        !currentUser ?
                            <i className="h3 text-black fa fa-arrow-down"></i>
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
                <div className="col-6 text-dark">
                    <div className="mb-2">
                        <div className="flex-wrap">{post.title}</div>
                        <span className={"flex-wrap text-inline rounded-pill fw-bold text-white a1-width-content text-center ps-3 pe-3 pt-1 pb-1 " + post.tagColor}>{post.tag}</span>
                    </div>
                    <div className="mb-1">Posted: {post.userHandle} {post.timestamp}</div>
                </div>
                <div className="col-1">
                        <i className="h5 fw-normal text-black fa fa-comment me-1"></i>
                        {post.comment}
                </div>
                <div className="col-1">
                        <i className="h5 text-black fa fa-share me-1"></i>
                        {post.share}
                </div>
                <div className="col-1">
                    {!currentUser || currentUser.handle !== post.userHandle ? 
                        <i className="h4 text-black fa fa-ellipsis-h"></i> 
                        :
                        
                        <i className="h4 text-black fa fa-ellipsis-h"
                        onClick={() => deletePostHandler(post._id)}></i>
                    }
                </div>
        </div>

    );
}

export default ForumSummaryItem;