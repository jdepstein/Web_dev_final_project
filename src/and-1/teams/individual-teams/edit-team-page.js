import {Link} from "react-router-dom";
import {useParams} from "react-router";
import {get_team} from "../../helper-funcs";

function EditTeamPage() {
    const { teamName } = useParams();
    const  team = get_team(teamName)



    return (
        <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
            <div className="h3 text-dark a1-font-family fw-bold mt-3 mb-2 ms-2">
                <span>
                    Editing Team
                </span>
                    <Link className="text-decoration-none" to={"/teams/" + teamName}><i className="float-end fa fa-x me-3 text-dark"></i></Link>
                </div>
                <div className={team.colors + " d-inline-block w-100"}>
                    <img alt="" className="opacity-50 ms-2 pt-1 pb-1 float-start a1-team-page-image" src={"../" + team.logo}/>
                    <Link className="text-decoration-none" to={"/teams/" + teamName}><button className="opacity-100 nav-item float-end rounded-pill a1-bg-blue shadow-none  fw-bold text-white btn-lg me-3 mt-4 ps-3 pe-3 pt-2 pb-2">
                        Save
                    </button></Link>
                    <Link className="text-decoration-none" to={"/teams/" + teamName}><button className="opacity-100  nav-item float-end rounded-pill a1-bg-red shadow-none fw-bold text-white btn-lg me-3 mt-4 ps-3 pe-3 pt-2 pb-2">
                        Cancel
                    </button></Link>
                </div>
                <div className="ms-3">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input id="name" className="form-control w-50 mb-4" value={team.name}></input>

                    <label className="form-label" htmlFor="location"> Location</label>
                    <input id="location" className="form-control w-50 mb-4" value={team.city}></input>

                    <label className="form-label" htmlFor="stadium"> Stadium</label>
                    <input id="stadium" className="form-control w-50 mb-4" value={team.stadium}></input>
                </div>
            </div>

    );
}
export default EditTeamPage;