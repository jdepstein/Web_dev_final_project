function Teams(
    my_teams =
        {name: "",
        teams: [
            {name: "",
            logo: "" ,
            wins: 10,
            loss: 10},
        ]
        }
) {
    return (
        <>
            <ul className="col-4 a1-no-bullet-pts">
                <li className="text-white ps-2 fw-bold">{my_teams.name}</li>
                {
                    my_teams.my_teams.teams.map((team,i) =>
                        <li key={i}>
                            <a className="text-white dropdown-item" href="#">
                                <img alt="" className="a1-logo-image" src={team.logo}/>
                                {team.name}
                            </a>
                        </li>)
                }
            </ul>
        </>
    );
}

export default Teams;