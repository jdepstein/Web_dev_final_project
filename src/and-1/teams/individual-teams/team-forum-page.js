import ForumTitle from "../../components/forum-title";
import CreatePost from "../../create-post";
import posts from "../../data/posts.json";
import ForumItem from "../../forum/forum-item";
import {useParams} from "react-router";

function TeamForumPage() {
    const { teamName } = useParams();
    return (


            <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                <ForumTitle/>
                <CreatePost/>
                {
                    posts.map((post, i) =>
                        <ForumItem key={i} post={post}/>
                    )
                }
            </div>

    );
}
export default TeamForumPage;