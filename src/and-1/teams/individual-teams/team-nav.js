import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {findIndividualTeamThunk, updateTeamThunk} from "../../thunks/teams-thunks";


function TeamNav() {
    const { teamName } = useParams();
    const logged = false
    let {teams, loading} = useSelector(
        state => state.teamData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findIndividualTeamThunk(teamName))
    }, [])
    return (
        <div className={teams.colors + " d-inline-block w-100"}>
            <nav className="navbar navbar-expand-sm navbar-light w-100">
                <img alt="" className="ms-2 navbar-brand a1-team-page-image" src={"../" + teams.logo}/>
                    <ul className="navbar-nav w-100">
                        <li className="nav-item">
                            <Link className="ps-2 text-white nav-link"
                                  to={"/teams/" + (teams.name) + "/team-home"}>Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="ps-2 text-white nav-link" to={
                                "/teams/" + (teams.name) +  "/team-schedule"}>Schedule</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="ps-2 text-white nav-link" to={
                                "/teams/" + (teams.name) + "/team-forum"}>Team Forum</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="ps-2 text-white nav-link" to="#">Tickets</Link>
                        </li>
                    </ul>
                    { logged ?
                        <Link to={"/teams/" + teams.name + "/edit-team"}>
                            <button className="nav-item float-end rounded-pill a1-bg-blue text-white fw-bold pt-2 pb-2 ps-3 pe-3 me-3">
                                Edit
                            </button>
                        </Link>
                        :
                        <>
                            {teams.liked ?
                                <i className="fa fa-heart nav-item float-end text-white h3 me-3 mt-2"
                                   onClick={() =>  dispatch(updateTeamThunk({
                                       ...teams, liked: false, likes: teams.likes - 1}))}>
                                </i>
                                :
                                <i className="fa fa-heart nav-item float-end text-white h3 me-3 mt-2 fw-normal"
                                   onClick={() =>  dispatch(updateTeamThunk({
                                           ...teams, liked: true, likes: teams.likes + 1}))}>
                                </i>
                            }
                            {teams.followed ?
                                <button onClick={() => dispatch(updateTeamThunk({
                                    ...teams, followed: false, follows: teams.follows - 1}))}
                                        className="nav-item float-end rounded-pill a1-bg-red text-white fw-bold pt-2 pb-2 ps-3 pe-3 me-3">
                                    Unfollow
                                </button>
                                :
                                <button onClick={() => dispatch(updateTeamThunk({
                                    ...teams, followed: true, follows: teams.follows + 1}))}
                                    className="nav-item float-end rounded-pill a1-bg-blue text-white fw-bold pt-2 pb-2 ps-3 pe-3 me-3">
                                    Follow
                                </button>
                            }
                        </>
                    }
            </nav>
        </div>

    );
}
export default TeamNav;






