import {Route, Routes} from "react-router";
import Players from "./index";
import PlayerPage from "./individual-player";


function PlayerRouting() {
    return (
            <Routes>
                <Route index element={<Players/>}/>
                <Route path={"/:search"} element={<Players/>}/>
                <Route path={"player/:pid"} element={<PlayerPage/>}/>
            </Routes>

        );
    }
export default PlayerRouting;