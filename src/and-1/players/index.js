import NavigationSidebar from "../components/nav";
import Standings from "../components/standings";
import ApiLatestResults from "../components/latest-results/api-index";
import PlayerSearch from "./player-search";

function Players() {
    
    return (
        <>
            <ApiLatestResults/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <PlayerSearch/>
                <Standings/>
            </div>
        </>
    );
}

export default Players;