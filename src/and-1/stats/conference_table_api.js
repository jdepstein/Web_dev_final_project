import React from "react";
import ConferenceTableApiItem from "./conference_table_api_item";
import data from "./example_response.json";


const sort_stuff = () => {

    const test = data.response.sort(
        (t1, t2) =>  parseInt(t1.win.percentage) < parseInt(t2.win.percentage) ? 1
            : parseInt(t1.win.percentage) > parseInt(t2.win.percentage) ? -1
                : 0
    )
    console.log(test)
    return test
}



const ConferenceApiTable = () => {
    let ids = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
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
                sort_stuff().map((team, i) =>
                    <ConferenceTableApiItem
                        key={i} team= {team}
                    />
                )
            }
            </tbody>
        </table>

    );
};

export default ConferenceApiTable;
