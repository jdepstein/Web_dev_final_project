
function ForumSummaryItem(
    post = {
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
        }
) {
    return (
        <div className="row border-3 border-top border-bottom p-0 m-0 pt-3 ps-1 pe-1 pb-1">
                <div className="col-1">
                    <i className="h3 text-black fa fa-arrow-up"></i>
                </div>
                <div className="col-1">
                    <p className="fw-bold">{post.post.likeDislike}</p>
                </div>
                <div className="col-1">
                    <i className="h3 text-black fa fa-arrow-down"></i>
                </div>
                <div className="col-6 text-dark">
                    <div className="mb-2">
                        <div className="flex-wrap">{post.post.title}</div>
                        <span className={"flex-wrap text-inline rounded-pill fw-bold text-white a1-width-content text-center ps-3 pe-3 pt-1 pb-1 " + post.post.tagColor}>{post.post.tag}</span>
                    </div>
                    <div className="mb-1">Posted: {post.post.userHandle} {post.post.timestamp}</div>
                </div>
                <div className="col-1">
                        <i className="h5 fw-normal text-black fa fa-comment me-1"></i>
                        {post.post.comment}
                </div>
                <div className="col-1">
                        <i className="h5 text-black fa fa-share me-1"></i>
                        {post.post.share}
                </div>
                <div className="col-1">
                        <i className="h4 text-black fa fa-ellipsis-h"></i>
                </div>
        </div>

    );
}

export default ForumSummaryItem;