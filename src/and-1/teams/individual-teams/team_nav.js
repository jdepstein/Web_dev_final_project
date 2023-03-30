import {Route, Routes, useLocation} from "react-router";
import {Link} from "react-router-dom";
import {get_team} from "../../helper-funcs";

function TeamNav() {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const teamName = paths[2];
    const  team = get_team(teamName)
    return (
        <div className={team.colors + " d-inline-block w-100"}>
            <nav className="navbar navbar-expand-sm navbar-light w-100">
                <img alt="" className="ms-2 navbar-brand a1-team-page-image" src={"../" + team.logo}/>
                    <ul className="navbar-nav w-100">
                        <li className="nav-item">
                            <Link className="ps-2 text-white nav-link"
                                  to={"/teams/" + team.name.toLowerCase() + "/team-home"}>Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="ps-2 text-white nav-link" to={
                                "/teams/" + team.name.toLowerCase() +  "/team-schedule"}>Schedule</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="ps-2 text-white nav-link" to={
                                "/teams/" + team.name.toLowerCase() + "/team-forum"}>Team Forum</Link>
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






