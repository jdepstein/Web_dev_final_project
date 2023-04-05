import Nav from "../nav";
import east_stats from "./stats.json";
import conference_table from "./conference_table";
import ConferenceTable from "./conference_table";
import Socials from "../sidebars/socials";
import ConferenceApiTable from "./conference_table_api";

function Stats() {
    return (
        <>
            <Nav/>
            <div className= "row container-fluid">
                <div className= "container-fluid col-md-12 col-lg-10 col-xl-9 p-0 border-start border-end">
                    <h4> Eastern Conference</h4>

                    <h4> Western Conference</h4>
                    <ConferenceTable/>
                </div>
                <Socials/>
            </div>
        </>
    );
}

export default Stats;