import east from "../../data/eastern.json";
import west from "../../data/western.json";

import StandingsItem from "./standings_item";

function all_teams(teamsList) {
    let allTeam = []
    teamsList.forEach(item =>
    {
        allTeam = allTeam.concat(item.teams)
    })
    return allTeam.sort(
        (t1, t2) => (t1.wins / (t1.wins + t1.loss) < t2.wins / (t2.wins + t2.loss)) ? 1
            : (t1.wins / (t1.wins + t1.loss) > t2.wins / (t2.wins + t2.loss)) ? -1
                : 0
    )

}


function Standings() {
    return (
        <>
            <div className="container-fluid a1-font-family d-none d-lg-block col-lg-3 col-xl-2 p-0">
                <div className="mt-4 text-dark fw-bold text-center"> NBA 2022-23 REGULAR SEASON STANDINGS</div>
                <div className="mt-3 text-dark ms-2"> Eastern Conference</div>
                <div className="ms-3 me-3">
                    <table className="a1-font-size-12px table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">Team</th>
                            <th scope="col">Win</th>
                            <th scope="col">Loss</th>
                        </tr>
                        </thead>
                        <tbody>
                            <StandingsItem teams={all_teams(east)}/>
                        </tbody>
                    </table>
                    <div className="mt-5 text-dark ms-2"> Western Conference</div>
                    <table className="a1-font-size-12px table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">Team</th>
                            <th scope="col">Win</th>
                            <th scope="col">Loss</th>
                        </tr>
                        </thead>
                        <tbody>
                            <StandingsItem teams={all_teams(west)}/>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Standings;


