function StandingsItem(
    my_teams =
       {
           name: "",
           teams: [
               {name: "",
                   logo: "" ,
                   wins: 10,
                   loss: 10},
                    ]}) {
    return (
        <>
        {
            my_teams.my_teams.teams.map((team,i) =>
                <tr key={i}>
                    <td className="text-start">
                        {i + 1}
                        <img alt="" className="a1-logo-image" src={team.logo}/>
                        {team.name}
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