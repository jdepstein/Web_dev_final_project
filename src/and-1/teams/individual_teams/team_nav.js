import {Route, Routes} from "react-router";
import {Link} from "react-router-dom";

function TeamNav(team) {
    return (
        <div className={team.team.team.team.colors + " d-inline-block w-100"}>
            <nav className="navbar navbar-expand-sm navbar-light w-100">
                <img alt="" className="ms-2 navbar-brand a1-team-page-image" src={"../" + team.team.team.team.logo}/>
                    <ul className="navbar-nav w-100">
                        <li className="nav-item">
                            <Link className="ps-2 text-white nav-link"
                                  to={"team-home"}>Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="ps-2 text-white nav-link" to={
                                "/teams/" + team.team.team.team.name.toLowerCase() +  "/team-schedule"}>Schedule</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="ps-2 text-white nav-link" to={
                                "/teams/" + team.team.team.team.name.toLowerCase() +  "/team-forum"}>Team Forum</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="ps-2 text-white nav-link" to="#">Tickets</Link>
                        </li>
                    </ul>
                    <button className="nav-item float-end btn rounded-pill btn-primary  btn-lg me-3">
                        Follow
                    </button>
            </nav>
        </div>

    );
}
export default TeamNav;






