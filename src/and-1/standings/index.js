import NavigationSidebar from "../components/nav";
import Standings from "../components/standings";
import LatestResults from "../components/latest-results";
import ApiLatestResults from "../components/latest-results/api-index";
import ApiConferenceTable from "./api_conference_table";
function Stats() {
    return (
        <>
            <ApiLatestResults/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <div className="container-fluid col-9 col-lg-7 col-xl-8 border-start border-end align-content-center">
                    <h2 className="align-content-center">Eastern Conference</h2>
                    <ApiConferenceTable
                        conference={"east"}/>
                    <h2 className="align-content-center">Western Conference</h2>
                    <ApiConferenceTable
                        conference = {"west"}/>
                </div>
                <Standings/>
            </div>
      </>
    );
}

export default Stats;