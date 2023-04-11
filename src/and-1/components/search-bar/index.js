import {Link} from "react-router-dom";
import React, {useState} from "react";



const SearchBar = () =>
{
    const [searchValue, setSearch] = useState('');
    return (
            <div className="row w-100 m-0 a1-bg-blue">
                <div className="= col-10 mt-3">
                    <div className="ms-3 rounded-pill border bg-white">
                        <div className="input-group">
                                    <span className="bg-transparent border-0 input-group-text" id="basic-addon1">
                                    <img alt="" src="../images/magnifying-glass-solid.svg" className="a1-filter-black ps-1" width="25" height="20"/>
                                    </span>
                            <input type="text" className="shadow-none border-0 bg-transparent test-dark form-control"
                                   placeholder="Search Posts" aria-label="Search Tuiter" aria-describedby="basic-addon1"
                                   onChange={(event) => setSearch(event.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="col-2 mt-3 mt-md-2 pt-md-1 p-1">
                    <div className="align-content-center">
                        <Link className="m-0 p-0" to={`/forum/`+searchValue}>
                            <i className="mt-md-1 p-md-1 wd-font-family-arial h2 text-white fw-normal a1-no_underline fa fa-arrow-alt-circle-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
    );
};
export default SearchBar