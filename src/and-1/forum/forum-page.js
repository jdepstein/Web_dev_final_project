import SearchBar from "../components/search-bar";
import ForumTitle from "../components/forum-title";
import CreatePost from "../create-post";
import posts from "../data/posts.json"
import ForumItem from "./forum-item";

function ForumPage() {
    return (
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

    );
}

export default ForumPage;