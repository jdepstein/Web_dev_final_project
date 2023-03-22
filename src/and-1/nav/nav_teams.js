import east from "../data/eastern.json";
import Teams from "./teams";
function NavTeams() {
    return (
        <>
            <li className="nav-item">
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink"
                               role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                Teams
                            </a>
                            <ul className="a1-width-600px dropdown-menu a1-bg-blue"
                                aria-labelledby="navbarDarkDropdownMenuLink">
                                <li className="row mt-2">
                                    {
                                    east.map((division,i) =>
                                        <Teams key={i} my_teams={division}/>)
                                    }
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
        </>
    );
}

export default NavTeams;
