import LatestResults from "../components/latest-results";
import NavigationSidebar from "../components/nav";
import Standings from "../components/standings";
import CreateComponent from "./create-component";


function CreatePostPage() {
    return (

        <>
            <LatestResults/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <CreateComponent/>
                <Standings/>
            </div>
        </>
    );
}

export default CreatePostPage;