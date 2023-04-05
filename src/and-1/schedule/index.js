import Nav from "../nav";
import NavigationSidebar from "../components/nav";
import Standings from "../components/standings";
import LatestResults from "../components/latest-results";
import ApiLatestResults from "../components/latest-results/api-index";

function Schedule() {
    return (
        <>
            <ApiLatestResults/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                    Schedule
                </div>
                <Standings/>
            </div>
      </>
    );
}

export default Schedule;