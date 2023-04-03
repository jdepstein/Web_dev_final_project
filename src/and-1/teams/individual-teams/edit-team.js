import TeamNav from "./team-nav";
import NavigationSidebar from "../../components/nav";
import Standings from "../../components/standings";
import EditTeamPage from "./edit-team-page";

function EditTeam() {
    return (
        <>
            <>
                <div className="row p-0 m-0">
                    <NavigationSidebar/>
                    <EditTeamPage/>
                    <Standings/>
                </div>

            </>

        </>

    );
}
export default EditTeam;