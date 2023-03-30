import SearchBar from "../components/search-bar";
import ForumTitle from "../components/forum-title";
import ForumSummaryItem from "./forum-summary-item";
import posts from "../data/posts.json"

function ForumSummary() {
    return (

            <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                <SearchBar/>
                <ForumTitle/>
                {
                    posts.map((post, i) =>
                        <ForumSummaryItem key={i} post={post}/>
                    )
                }

            </div>

    );
}

export default ForumSummary;