import {Link} from "react-router-dom";

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {findTeamsThunk}
    from "../thunks/teams-thunks";



function TeamSearch() {
    const {teams, loading} = useSelector(
        state => state.teamData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTeamsThunk())
    }, [])
    return (
        <>
                {
                    [0,5,10,15,20,25].map(i =>
                        <div key={i} className="row mb-5 mt-5">
                            <div className="col-1"></div>
                            {
                                teams.slice(i, i + 5).map((team, i) =>
                                    <div  key={i} className="col-2">
                                        <Link onClick={window.location.reload} to={team.name.toLowerCase()}>
                                            <img alt="" className="a1-image_team_page " src={team.logo}/>
                                        </Link>
                                    </div>
                                )
                            }
                            <div className="col-1"></div>
                        </div>
                    )
                }
        </>
    );
}

export default TeamSearch;