import {all_teams} from "../helper-funcs";
import {Link} from "react-router-dom";

function CreateComponent() {
    return (
        <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 wd-bg-off-white border-start border-end align-content-center ps-2 pe-2">
            <div className="text-center h2 mt-2 mb-2 "> Create Post </div>
                <input placeholder="title" className=" mb-2 mt-3 w-100 form-control shadow-none border-1 border-dark"></input><br/>
                <textarea placeholder="Enter your post content" className= "ps-2 w-100 rounded-3 a1-text-area border border-1 border-dark"></textarea><br/>
                <div className="row p-0 m-0">
                    <div className="col-8">
                        <select className="form-control w-25 shadow-none mt-3">
                            {
                                all_teams().map(team =>
                                    <option value={team.name}>
                                        {team.name}
                                    </option>
                                )
                            }
                            <option value="general">
                                general
                            </option>
                        </select>
                    </div>
                    <div className="col-4">
                        <Link to="/home"><button className="rounded-pill text-white fw-bold h5 a1-bg-red m-1 ps-3 pe-3 pt-2 pb-2 float-end">Cancel</button></Link>
                        <Link to="/home"><button className="rounded-pill text-white fw-bold h5 a1-bg-blue m-1  ps-3 pe-3 pt-2 pb-2 float-end">Post</button></Link>
                    </div>
                </div>
        </div>
    );
}

export default CreateComponent;