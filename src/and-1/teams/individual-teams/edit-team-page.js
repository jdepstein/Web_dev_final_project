import {Link} from "react-router-dom";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findIndividualTeamThunk} from "../../thunks/teams-thunks";
import {findTeamUserThunk, updateTeamUserThunk} from "../../thunks/team-users-thunks";


function EditTeamPage() {
    const { teamName } = useParams();

    const {teams, loading} = useSelector(
        state => state.teamData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findIndividualTeamThunk(teamName))
    }, [])


    const [team, setTeam] = useState({})
    const callThunk = async () => {
        const {payload} = await dispatch(findTeamUserThunk(teamName));
        setTeam(payload[0])
    }
    useEffect(() => {
        callThunk()
    }, [])


    const updateTeamLocation = (target) => {
        setTeam({...team, city: target})
    }

    const updateTeamStadium = (target) => {
        setTeam({...team, stadium: target})
    }

    //TODO SETUP SESSIONS FOR TEAM USERS

    return (
        <>
            { loading ? "loading"
                :
                <>
                    <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                        <div className="h3 text-dark a1-font-family fw-bold mt-3 mb-2 ms-2">
                            <span>
                                Editing Team
                            </span>
                                <Link className="text-decoration-none" to={"/teams/" + teamName}><i className="float-end fa fa-x me-3 text-dark"></i></Link>
                        </div>
                        <div className={teams.colors + " d-inline-block w-100"}>
                            <img alt="" className="opacity-50 ms-2 pt-1 pb-1 float-start a1-team-page-image" src={"../" + teams.logo}/>
                            <Link className="text-decoration-none" to={"/teams/" + teamName}>
                                <button className="opacity-100 nav-item float-end rounded-pill a1-bg-blue shadow-none  fw-bold text-white btn-lg me-3 mt-4 ps-3 pe-3 pt-2 pb-2"
                                onClick={() => dispatch(updateTeamUserThunk({
                                    ...team}))}>
                                Save
                            </button></Link>
                            <Link className="text-decoration-none" to={"/teams/" + teamName}><button className="opacity-100  nav-item float-end rounded-pill a1-bg-red shadow-none fw-bold text-white btn-lg me-3 mt-4 ps-3 pe-3 pt-2 pb-2">
                                Cancel
                            </button></Link>
                        </div>
                        <div className="ms-3">
        
                            <label className="form-label" htmlFor="location"> Location</label>
                            <input id="location" className="form-control w-50 mb-4" value={team.city}
                                onChange={(e) => updateTeamLocation(e.target.value)}></input>

                            <label className="form-label" htmlFor="stadium"> Stadium</label>
                            <input id="stadium" className="form-control w-50 mb-4" value={team.stadium}
                                onChange={(e) => updateTeamStadium(e.target.value)}></input>
                        </div>
                    </div>
                </>
                }
            </>

    );
}
export default EditTeamPage;