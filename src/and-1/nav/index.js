import {Link} from "react-router-dom";
function Nav() {
    const logged = false;
    return (
        <nav className="navbar navbar-expand-sm a1-bg-red navbar-light sticky-top col-12 w-100">
            <Link className="text-white ms-3 me-2 navbar-brand" to="/home">
                <i className="fa fa-basketball-ball"></i>
            </Link>
            <button className="navbar-toggler bg-white outline-0 me-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="ps-2 text-white nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                    </li>

                    <li className="nav-item">
                        <Link className="ps-2 text-white nav-link" to="/stats">Stats</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="ps-2 text-white nav-link" to="/teams">Teams</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="ps-2 text-white nav-link" to="/schedule">Schedule</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="ps-2 text-white nav-link" to="/forum">Forum</Link>
                    </li>
                </ul>
                {logged ?
                <div className="nav-item">
                    <Link className="ps-2 pe-0 pe-sm-4 text-white nav-link" to="/profile">Profile</Link>
                </div>
                :
                <div className="nav-item">
                    <Link className="ps-2 pe-0 pe-sm-4 text-white nav-link" to="/login">Profile</Link>
                </div>
                }
        </nav>
    );
}

export default Nav;