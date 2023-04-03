import {useParams} from "react-router";
import {get_team} from "../../helper-funcs";

function HomePage()
{
    const { teamName } = useParams();
    const  team = get_team(teamName)
    return (
            <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                <div className="h2 text-dark a1-font-family fw-bold mt-5 text-center">
                    {team.city} {team.name}
                </div>
                <div className="h5 text-dark a1-font-family fw-bold text-center">
                    {team.stadium}
                </div>
                <div className="h4 text-dark a1-font-family fw-bold mt-5 text-center border-bottom pb-3 mb-2">
                    <span className="me-2 text-secondary">Likes:</span> {team.likes}
                    <span className="me-2 ms-2 text-secondary">Followers: </span> {team.follows}
                </div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th></th>
                        <th scope="col">Player</th>
                        <th scope="col">#</th>
                        <th scope="col">Pos</th>
                        <th scope="col">Height</th>
                        <th scope="col">Weight</th>
                        <th scope={"col"}>Likes</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        team.players.map((player,i) =>
                            <tr>
                                <th>
                                    <img alt="" className="d-inline a1-player-image" src={player.photo}/>
                                </th>
                                <td>
                                    {player.name}
                                </td>
                                <td>{player.number}</td>
                                <td>{player.position}</td>
                                <td>{player.height}</td>
                                <td>{player.weight}</td>
                                <td>
                                    <i className="fa fa-heart text-dark me-1 fw-normal">
                                    </i>
                                    0
                                </td>
                            </tr>
                        )}
                    </tbody>
                    </table>
            </div>
    );
}
export default HomePage;