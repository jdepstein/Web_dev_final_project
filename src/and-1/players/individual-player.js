import NavigationSidebar from "../components/nav";
import Standings from "../components/standings";
import ApiLatestResults from "../components/latest-results/api-index";
import PlayerItem from "./player-item";

function Players(currentplayer={}) {
    const player = currentplayer.currentplayer;
    return (
        <>
            <ApiLatestResults/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <PlayerItem player={player}/>
                <Standings/>
            </div>
        </>
    );
}

export default Players;