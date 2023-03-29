import {Link} from "react-router-dom";
import {all_teams} from "../helper_funcs";


function TeamSearch() {
    return (
        <>
                {
                    [0,5,10,15,20,25].map(i =>
                        <div key={i} className="row mb-5 mt-5">
                            <div className="col-1"></div>
                            {
                                all_teams().slice(i, i + 5).map((team, i) =>
                                    <div  key={i} className="col-2">
                                        <Link to={team.name.toLowerCase()}>
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