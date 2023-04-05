import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {findIndividualTeamThunk, updateTeamThunk} from "../../thunks/teams-thunks";


function TeamNav() {
    const { teamName } = useParams();
    const logged = false
    const {team, loading} = useSelector(
        state => state.teamData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findIndividualTeamThunk(teamName))
    }, [])
    return (
        <div className={team.colors + " d-inline-block w-100"}>
            <nav className="navbar navbar-expand-sm navbar-light w-100">
                <img alt="" className="ms-2 navbar-brand a1-team-page-image" src={"../" + team.logo}/>
                    <ul className="navbar-nav w-100">
                        <li className="nav-item">
                            <Link className="ps-2 text-white nav-link"
                                  to={"/teams/" + (team.name) + "/team-home"}>Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="ps-2 text-white nav-link" to={
                                "/teams/" + (team.name) +  "/team-schedule"}>Schedule</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="ps-2 text-white nav-link" to={
                                "/teams/" + (team.name) + "/team-forum"}>Team Forum</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="ps-2 text-white nav-link" to="#">Tickets</Link>
                        </li>
                    </ul>
                    { logged ?
                        <Link to={"/teams/" + team.name.toLowerCase() + "/edit-team"}>
                            <button className="float-end btn rounded-pill btn-primary  btn-lg me-3">
                                Edit Team
                            </button>
                        </Link>
                        :
                        <>
                            {team.liked ?
                                <i className="fa fa-heart nav-item float-end text-white h3 me-3 mt-2"
                                   onClick={() =>  dispatch(updateTeamThunk({
                                       ...team, liked: false, likes: team.likes - 1}))}>
                                </i>
                                :
                                <i className="fa fa-heart nav-item float-end text-white h3 me-3 mt-2 fw-normal"
                                   onClick={() =>  dispatch(updateTeamThunk({
                                           ...team, liked: true, likes: team.likes + 1}))}>
                                </i>
                            }
                            {team.followed ?
                                <button onClick={() => dispatch(updateTeamThunk({
                                    ...team, followed: false, follows: team.follows - 1}))}
                                        className="nav-item float-end btn rounded-pill btn-primary  btn-lg me-3">
                                    Unfollow
                                </button>
                                :
                                <button onClick={() => dispatch(updateTeamThunk({
                                    ...team, followed: true, follows: team.follows + 1}))}
                                    className="nav-item float-end btn rounded-pill btn-primary  btn-lg me-3">
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






