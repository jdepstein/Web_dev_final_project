import React from 'react';
import {Link} from "react-router-dom";

function PlayerComponent (
    player = 
    {

    }){
    return (
        <Link to={"/players/player/123"} className="text-center mt-3 col-5 text-decoration-none text-dark">
            <div className="row border p-0 m-0 w-100 pb-3">
                <img alt="" src="../../images/jaylen.png" className="a1-image_100 col-3" />
                <div className="card-body-right col-9">
                    <p className="card-title h5 mb-3">Jaylen Brown #6</p>
                    <div className="mb-4">
                        <span className=" me-3 border rounded p-2">Height: 6:3</span>
                        <span className="border rounded p-2">Weight: 210</span>
                    </div>
                        <div>
                            <span className="border rounded p-2">Position: SG/G</span>
                        </div>
                    </div>
            </div>
        </Link>
    );
};
export default PlayerComponent