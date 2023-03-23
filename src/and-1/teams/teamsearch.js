import {Link} from "react-router-dom";


function TeamSearch(teams) {
    return (
        <div className="container-fluid col-md-9 col-lg-7 col-xl-7 p-0 border-start border-end align-content-center">
            <div className="row mb-5 mt-5 d-flex align-content-center">
                <div className="col-1"></div>
                {
                    teams.teams.teams.slice(0, 5).map((team, i) =>
                        <div  key={i} className="col-2">
                            <Link to={team.name.toLowerCase()}>
                                <img alt="" className="a1-image_team_page " src={team.logo}/>
                            </Link>
                        </div>
                    )
                }
                <div className="col-1"></div>
            </div>

            <div className="row mb-5 mt-5">
                <div className="col-1"></div>
                {
                    teams.teams.teams.slice(5, 10).map((team, i) =>
                        <div key={i} className="col-2">
                            <Link to={team.name.toLowerCase()}>
                                <img alt="" className="a1-image_team_page " src={team.logo}/>
                            </Link>
                        </div>
                    )
                }
                <div className="col-1"></div>
            </div>

            <div className="row mb-5 mt-5">
                <div className="col-1"></div>
                {
                    teams.teams.teams.slice(10, 15).map((team, i) =>
                        <div key={i} className="col-2">
                            <Link to={team.name.toLowerCase()}>
                                <img alt="" className="a1-image_team_page " src={team.logo}/>
                            </Link>
                        </div>
                    )
                }
                <div className="col-1"></div>
            </div>


            <div className="row mb-5 mt-5">
                <div className="col-1"></div>
                {
                    teams.teams.teams.slice(15, 20).map((team, i) =>
                        <div key={i} className="col-2">
                            <Link to={team.name.toLowerCase()}>
                                <img alt="" className="a1-image_team_page " src={team.logo}/>
                            </Link>
                        </div>
                    )
                }
                <div className="col-1"></div>
            </div>


            <div className="row mb-5 mt-5">
                <div className="col-1"></div>
                {
                    teams.teams.teams.slice(20, 25).map((team, i) =>
                        <div  key={i} className="col-2">
                            <Link to={team.name.toLowerCase()}>
                                <img alt="" className="a1-image_team_page " src={team.logo}/>
                            </Link>
                        </div>
                    )
                }
                <div className="col-1"></div>
            </div>


            <div className="row mb-5 mt-5">
                <div className="col-1"></div>
                {
                    teams.teams.teams.slice(25, 30).map((team, i) =>
                        <div key={i} className="col-2">
                            <Link to={team.name.toLowerCase()}>
                                <img alt="" className="a1-image_team_page " src={team.logo}/>
                            </Link>
                        </div>
                    )
                }
                <div className="col-1"></div>
            </div>

    </div>
    );
}

export default TeamSearch;