import React from "react";
import ConferenceTableApiItem from "./api_conference_table_item";
import data from "../data/east_stats.json";

const sort_stuff = () => {
    const test = data.response.sort(
        (t1, t2) =>  parseFloat(t1.win.percentage) < parseFloat(t2.win.percentage) ? 1
            : parseFloat(t1.win.percentage) > parseFloat(t2.win.percentage) ? -1
                : 0
    )
    return test
}
const ApiConferenceTable = () => {
   // let ids = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    let team_array =     sort_stuff();
    //sort_stuff();
    //console.log(team_array);
    return(
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col"> Team</th>
                <th scope="col"> W</th>
                <th scope="col"> L</th>
                <th scope="col"> PCT</th>
                <th scope="col"> GB</th>
                <th scope="col"> HOME</th>
                <th scope="col"> AWAY</th>
                <th scope="col"> DIV</th>

            </tr>
            </thead>
            <tbody>
            {
                team_array.map((data, i) =>
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