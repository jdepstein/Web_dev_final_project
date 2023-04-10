import results  from "./results.json"
import ResultsItem from "./results-item";
import games from "./recent_games.json";
import ApiResultsItem from "./api-results-item";
const ApiLatestResults = (
) => {
    let game_array = games.response;


    return (
        <ul className="list-group list-group-horizontal border-top border-bottom">
            {
                game_array.map((game, i) => {
                    if (i > 5) {
                        return
                    }
                    else
                        return (
                            <li key={i} className="list-group-item text-dark m-auto border-0">
                                <ApiResultsItem game={game}/>
                            </li>)
                })
            }
        </ul>
    );

};
export default ApiLatestResults