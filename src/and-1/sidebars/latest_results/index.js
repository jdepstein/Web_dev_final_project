import results  from "./results.json"
import ResultsItem from "./results-item";
const LatestResults = (
) => {
    return (
        <ul className="list-group list-group-horizontal border-top border-bottom">
        {
            results.map((result, i) => {
                        if (i > 5) {
                            return
                        }
                        else
                        return (
                            <li key={i} className="list-group-item text-dark m-auto border-0">
                                <ResultsItem result={result}/>
                            </li>)
                })
            }
        </ul>
    );

};
export default LatestResults