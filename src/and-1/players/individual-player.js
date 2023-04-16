import NavigationSidebar from "../components/nav";
import Standings from "../components/standings";
import ApiLatestResults from "../components/latest-results/api-index";

function Players() {
    
    return (
        <>
            <ApiLatestResults/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                    PLAYER PAGE GOES HERE
                </div>
                <Standings/>
            </div>
        </>
    );
}

export default Players;