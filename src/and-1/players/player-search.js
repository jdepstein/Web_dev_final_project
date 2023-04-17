import {Link} from "react-router-dom";
import React, {useState} from "react";
import {useParams} from "react-router-dom";
import PlayerComponent from "../components/playerComponent";


const PlayerSearch = () =>
{   
    const {search} = useParams();
    const [searchValue, setSearch] = useState('');
    let results = [1,2,3,4,5,6]
    let remainer = results.length % 2
    let numbers = [];
    for (let i = 0; i < results.length -1; i += 2){
        numbers.push(i)
    }
    if (remainer > 0){
        numbers.push(results.length - remainer)
    }

    return (
        <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
            <div className="text-center h3 mt-3 mb-1  wd-font-family-arial text-dark fw-bold">Search For Players!</div>
            <div className="row w-100 m-0 a1-bg-red">
                <div className="= col-10 mt-3">
                    <div className="ms-3 rounded-pill border bg-white">
                        <div className="input-group">
                                    <span className="bg-transparent border-0 input-group-text" id="basic-addon1">
                                    <img alt="" src="../images/magnifying-glass-solid.svg" className="a1-filter-black ps-1" width="25" height="20"/>
                                    </span>
                            <input type="text" className="shadow-none border-0 bg-transparent test-dark form-control"
                                   placeholder="Search API" aria-label="Search Tuiter" aria-describedby="basic-addon1"
                                   onChange={(event) => setSearch(event.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="col-2 mt-3 mt-md-2 pt-md-1 p-1">
                    <div className="align-content-center">
                        <Link className="m-0 p-0" to={`/players/`+searchValue}>
                            <i className="mt-md-1 p-md-1 wd-font-family-arial h2 text-white fw-normal a1-no_underline fa fa-arrow-alt-circle-right"></i>
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                {
                numbers.map(i =>
                    {
                        if (results[i+1] !== undefined) {
                            return (
                                <div className="row p-0 m-0 ms-1 me-1">
                                    <PlayerComponent player={results[i]}/>
                                        <div className="col-2"></div>
                                    <PlayerComponent player={results[i+1]}/>
                                </div>
                            )
                        }
                        else{
                            return (
                                <>
                                    <PlayerComponent player={results[i]}/>
                                </>
                            )
                        }
                    }
                )
                }
            </div>
        </div>
    );
};
export default PlayerSearch