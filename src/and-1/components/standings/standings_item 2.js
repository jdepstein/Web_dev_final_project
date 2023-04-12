import {useParams} from "react-router";
import {get_team} from "../../helper-funcs";

function StandingsItem(teams) {
    const { teamName } = useParams();
    let active = false
    return (
        <>
        {
            teams.teams.map((team,i) =>
                {
                    active = team.name.toLowerCase() === teamName;
                    return (<tr key={i} className={active ? "a1-bg-blue text-white" : ""}>
                        <td>
                            <span className="float-start me-1">{i + 1}</span>
                            <img alt="" className="float-start me-1 d-inline-flex a1-logo-image" src={team.logo}/>
                            <span className="float-start text-nowrap">{team.name}</span>
                        </td>
                        <td>{team.wins}</td>
                        <td>{team.loss}</td>
                    </tr>)
                }
            )
        }
        </>
    );
}

export default StandingsItem;