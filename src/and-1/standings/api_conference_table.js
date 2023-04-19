import React, {useEffect, useState} from "react";
import ConferenceTableApiItem from "./api_conference_table_item";
import data from "../data/east_stats.json";

const sort_stuff = (arr) => {
    const test = arr.sort(
        (t1, t2) =>  parseFloat(t1.win.percentage) < parseFloat(t2.win.percentage) ? 1
            : parseFloat(t1.win.percentage) > parseFloat(t2.win.percentage) ? -1
                : 0
    )
    return test
}
const ApiConferenceTable = (conference) => {
   // let ids = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    //let team_array =     sort_stuff();
    const [container, setContainer] = useState([])
    //sort_stuff();
    console.log(conference);

    useEffect(() => {
        fetchStandings()
    }, [])
    const fetchStandings = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ffe553bafcmsh09081a7421177b6p1e80fajsn7bcaea95a37d',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        };

        fetch(`https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022&conference=${conference.conference}`, options)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setContainer(data.response)
            })
            .catch(err => console.error(err));
    }
    console.log(container)
    console.log(typeof (container))
    let result = sort_stuff(container);

    return(
        <table className="table table-striped p-0 m-0">
            <thead>
            <tr>
                <th scope="col"> Team</th>
                <th scope="col"> W</th>
                <th scope="col"> L</th>
                <th scope="col"> PCT</th>
                <th className="d-none d-xl-block" scope="col"> GB</th>
                <th scope="col"> HOME</th>
                <th scope="col"> AWAY</th>
                <th className="d-none d-xl-block" scope="col"> DIV</th>

            </tr>
            </thead>
            <tbody>
            {
                result.map((data, i) =>
                    <ConferenceTableApiItem
                        key={i} data= {data}
                    />
                )
            }
            </tbody>
        </table>

    );
};

export default ApiConferenceTable;