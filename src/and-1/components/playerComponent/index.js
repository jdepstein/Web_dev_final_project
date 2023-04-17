import React from 'react';
import {Link} from "react-router-dom";

function PlayerComponent (
    player =
        {
            "id": 75,
            "firstname": "Jaylen",
            "lastname": "Brown",
            "birth": {
                "date": "1996-10-24",
                "country": "USA"
            },
            "nba": {
                "start": 2016,
                "pro": 5
            },
            "height": {
                "feets": "6",
                "inches": "6",
                "meters": "1.98"
            },
            "weight": {
                "pounds": "223",
                "kilograms": "101.2"
            },
            "college": "California",
            "affiliation": "California/USA",
            "leagues": {
                "standard": {
                    "jersey": 7,
                    "active": true,
                    "pos": "G-F"
                }
            }
        }

    )

{
    console.log(player)

    return (
        <Link to={"/players/player/123"} className="text-center mt-3 col-5 text-decoration-none text-dark">
            <div className="row border p-0 m-0 w-100 pb-3">
                <img alt="" src="../../images/jaylen.png" className="a1-image_100 col-3" />
                <div className="card-body-right col-9">
                    <p className="card-title h5 mb-3">{player.player.firstname} {player.player.lastname} {//player.player.leagues.standard.jersey  != null ? player.player.leagues.standard.jersey: "n/a"
                    }</p>
                    <div className="mb-4">
                        <span className=" me-3 border rounded p-2"> {player.player.height != null ? player.player.height.feets : "n/a"}' {player.player.height.inches != null ? player.player.height.inches : "n/a"
                             }</span>
                        <span className="border rounded p-2">{ player.player.weight.pounds != null ? player.player.weight.pounds : "n/a"
                             }</span>
                    </div>
                        <div>
                            <span className="border rounded p-2">{player.player.leagues.standard.pos != null ? player.player.leagues.standard.pos : "n/a"
                                 }</span>
                        </div>
                    </div>
            </div>
        </Link>
    );
};
export default PlayerComponent