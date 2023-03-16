import Nav from "../nav";
import east from "../nav/eastern.json";
import west from "../nav/western.json";

import StandingsItem from "./standings_item";

function Standings() {
    return (
        <>
            <div className="container-fluid a1-font-family text-center d-none d-md-block col-md-3 col-lg-3 col-xl-2 p-0">
                <div className="mt-4 text-dark fw-bold"> NBA 2022-23 REGULAR SEASON STANDINGS</div>
                <div className="mt-3 text-dark"> Eastern Conference</div>
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
                            {
                                east.map((division,i) =>
                                    <StandingsItem key={i} my_teams={division}/>)
                            }
                        </tbody>
                    </table>
                    <div className="mt-5 text-dark"> Western Conference</div>
                    <table className="a1-font-size-12px table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">Team</th>
                            <th scope="col">Win</th>
                            <th scope="col">Loss</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            east.map((division,i) =>
                                <StandingsItem key={i} my_teams={division}/>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Standings;


