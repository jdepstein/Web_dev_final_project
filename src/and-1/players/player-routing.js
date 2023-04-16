import {Route, Routes} from "react-router";
import Players from "./index";
import PlayerPage from "./individual-player";


function PlayerRouting() {
    return (
            <Routes>
                <Route index element={<Players/>}/>
                <Route path={"/:pid"} element={<PlayerPage/>}/>
            </Routes>

        );
    }
export default PlayerRouting;