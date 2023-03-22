


function StandingsItem(teams) {
    return (
        <>
        {
            teams.teams.map((team,i) =>
                <tr key={i}>
                    <td>
                        <span className="float-start me-1">{i + 1}</span>
                        <img alt="" className="float-start me-1 d-inline-flex a1-logo-image" src={team.logo}/>
                        <span className="float-start text-nowrap" >{team.name}</span>
                    </td>
                    <td>{team.wins}</td>
                    <td>{team.loss}</td>
                </tr>
            )
        }
        </>
    );
}

export default StandingsItem;