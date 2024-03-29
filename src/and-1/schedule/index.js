import NavigationSidebar from "../components/nav";
import Standings from "../components/standings";
import ApiLatestResults from "../components/latest-results/api-index";
import ScheduleItem from "./schedule-item";

function Schedule() {
    return (
        <>
            <ApiLatestResults/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                    <ScheduleItem/>
                </div>
                <Standings/>
            </div>
      </>
    );
}

export default Schedule;