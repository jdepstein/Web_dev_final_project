import {get_team} from "../../helper-funcs";


const ApiResultsItem = (
    {
        game = {
            "id": 12225,
            "league": "standard",
            "season": 2022,
            "date": {
                "start": "2023-04-04T23:00:00.000Z",
                "end": null,
                "duration": null
            },
            "stage": 2,
            "status": {
                "clock": null,
                "halftime": false,
                "short": 3,
                "long": "Finished"
            },
            "periods": {
                "current": 4,
                "total": 4,
                "endOfPeriod": false
            },
            "arena": {
                "name": null,
                "city": null,
                "state": null,
                "country": null
            },
            "teams": {
                "visitors": {
                    "id": 38,
                    "name": "Toronto Raptors",
                    "nickname": "Raptors",
                    "code": "TOR",
                    "logo": "https://upload.wikimedia.org/wikipedia/fr/8/89/Raptors2015.png"
                },
                "home": {
                    "id": 5,
                    "name": "Charlotte Hornets",
                    "nickname": "Hornets",
                    "code": "CHA",
                    "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f3/Hornets_de_Charlotte_logo.svg/1200px-Hornets_de_Charlotte_logo.svg.png"
                }
            },
            "scores": {
                "visitors": {
                    "win": 0,
                    "loss": 0,
                    "series": {
                        "win": 0,
                        "loss": 0
                    },
                    "linescore": [
                        "25",
                        "36",
                        "33",
                        "26"
                    ],
                    "points": 120
                },
                "home": {
                    "win": 0,
                    "loss": 0,
                    "series": {
                        "win": 0,
                        "loss": 0
                    },
                    "linescore": [
                        "29",
                        "20",
                        "26",
                        "25"
                    ],
                    "points": 100
                }
            },
            "officials": [],
            "timesTied": null,
            "leadChanges": null,
            "nugget": null
        },
    }) => {


    return (
        <>
            <div className="text-dark fw-normal a1-font-size-15px ">
                Final
                <div>
                    <img alt="" className="float-start a1-logo-image-2 me-2 mb-2 mt-2" src={game.teams.visitors.logo}/>
                    <span className="fw-bold float-end mt-2">{game.scores.visitors.points}</span>
                </div>
                <div>
                    <img alt="" className="float-start a1-logo-image-2 me-2 " src={game.teams.home.logo}/>
                    <span className="fw-bold float-end">{game.scores.home.points}</span><br/>
                </div>
            </div>
        </>
    );
}
export default ApiResultsItem;