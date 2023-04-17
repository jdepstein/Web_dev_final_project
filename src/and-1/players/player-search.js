import {Link} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import PlayerComponent from "../components/playerComponent";
import axios from "axios";

const PlayerSearch = () =>
{   
    const {search} = useParams();
    const [searchValue, setSearch] = useState('');
    const [container, setContainer] = useState([])
    const [finalPoint, setFinalPoint] = useState('')

    useEffect(() => {
        fetchMe()
    }, [finalPoint])

    const fetchMe = () => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ffe553bafcmsh09081a7421177b6p1e80fajsn7bcaea95a37d',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        };

        fetch(`https://api-nba-v1.p.rapidapi.com/players?name=${searchValue}`, options)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setContainer(data.response)
            })
            .catch(err => console.error(err));
    }

    const submitHandler = e => {
        e.preventDefault()
        setFinalPoint(searchValue)
    }
    let results = [1,2,3,4,5,6]
    let remainer = results.length % 2
    let numbers = [];
    for (let i = 0; i < results.length -1; i += 2){
        numbers.push(i)
    }
    if (remainer > 0){
        numbers.push(results.length - remainer)
    }
    console.log(finalPoint)
    console.log(container)

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
                            <form onSubmit={submitHandler}>
                                <input type="text" className="shadow-none border-0 bg-transparent test-dark form-control"
                                       placeholder="Search API" aria-label="Search Tuiter" aria-describedby="basic-addon1"
                                       onChange={(event) => setSearch(event.target.value)} />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-2 mt-3 mt-md-2 pt-md-1 p-1">
                    <div className="align-content-center">
                        <Link className="m-0 p-0" to={`/players/`+searchValue}>
                            <i onClick={(event) => setFinalPoint(searchValue)} className="mt-md-1 p-md-1 wd-font-family-arial h2 text-white fw-normal a1-no_underline fa fa-arrow-alt-circle-right"></i>
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                {
                container.map((player) => {
                    return (
                        <div>
                            {player.leagues.standard &&
                                <PlayerComponent player = {player}/>
                            }

                        </div>

                    )
                })}

            </div>
        </div>
    );
};
export default PlayerSearch