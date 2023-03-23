import {Link} from "react-router-dom";


function TeamSearch(teams) {
    return (
        <div className="container-fluid col-md-9 col-lg-7 col-xl-7 p-0 border-start border-end align-content-center">
                {
                    [0,5,10,15,20,25].map(i =>
                        <div className="row mb-5 mt-5">
                            <div className="col-1"></div>
                            {
                                teams.teams.teams.slice(i, i + 5).map((team, i) =>
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
        </div>
    );
}

export default TeamSearch;