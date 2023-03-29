import Nav from "../nav";
import NavigationSidebar from "../sidebars/nav";
import Standings from "../sidebars/standings";
import LatestResults from "../sidebars/latest_results";

function Stats() {
    return (
        <>
            <LatestResults/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                    Stats
                </div>
                <Standings/>
            </div>
      </>
    );
}

export default Stats;