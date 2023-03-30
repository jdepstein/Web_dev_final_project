function ForumItem(post = {
    title: "Are the Celtics the best team in the League?",
    userHandle: "@JaylenFan",
    profilePic : "images/celtics.png",
    post_type: "text",
    post_content: "place holder for post content",
    likeDislike : 10,
    comment : 5,
    share: 23,
    timestamp: "2 min ago",
    tag: "celtics",
    tagColor: "a1-bg-celtics"
}) {
    return (
        <div className="mb-1">
            <div className="border-3 h5 text-center border-bottom pb-2 pt-3">
                {post.post.title + "  "}
            </div>
            <div className="row border-3 p-0 m-0">
                <div className="col-2 col-xl-1 p-0 m-0 text-center">
                        <img alt="" src={post.post.profilePic} className="a1-profile-pic ms-4"/>
                </div>
                <div className="col-10 col-xl-11">
                    <div>{post.post.post_content}</div>
                </div>
            </div>
            <div className="mb-1 text-center fw-bold mt-2 mb-2">
                Posted: {post.post.userHandle} {post.post.timestamp + " "}
                <span className={"flex-wrap text-inline rounded-pill fw-bold text-white a1-width-content text-center ps-3 pe-3 pt-1 pb-1 " + post.post.tagColor}>{post.post.tag}</span>
            </div>
            <div className="row border-top border-3 p-0 m-0 pt-2">
                <div className="col-2 p-0"></div>
                <div className="col-1 p-0">
                    <i className="h3 text-black fa fa-arrow-up p-0"></i>
                </div>
                <div className="col-1 p-0">
                    <p className="fw-bold p-0">{post.post.likeDislike}</p>
                </div>
                <div className="col-1 p-0">
                    <i className="h3 text-black fa fa-arrow-down"></i>
                </div>
                <div className="col-2 p-0 text-center">
                    <i className="h5 fw-normal text-black fa fa-comment me-1 p-0"></i>
                    {post.post.comment}
                </div>
                <div className="col-2 p-0 text-center">
                    <i className="h5 text-black fa fa-share me-1 p-0"></i>
                    {post.post.share}
                </div>
                <div className="col-1 p-0">
                    <i className="h4 text-black fa fa-ellipsis-h p-0"></i>
                </div>
                <div className="col-2 p-0"></div>
            </div>
        </div>
    );
}

export default ForumItem;