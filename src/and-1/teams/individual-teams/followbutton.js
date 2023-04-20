import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
    



function FollowTeamNav(passeduser){
    const teams =  passeduser.passeduser.team
    const user = passeduser.passeduser.user


    const [isCurrent, setIsCurrent] = useState(false)
    const {currentUser} = useSelector(state => state.UserData)


    if(currentUser !== null) {
        if (user.handle === currentUser.handle){
            if (isCurrent === false)
                setIsCurrent(true)
        }
    }

    return (
        <div className={teams.colors + " d-inline-block w-100"}>
        <nav className="navbar navbar-expand-sm navbar-light w-100">
            <img alt="" className="ms-2 navbar-brand a1-team-page-image" src={"../" + teams.logo}/>
                <ul className="navbar-nav w-100">
                    <li className="nav-item">
                        <Link className="ps-2 text-white nav-link"
                            to={"/teams/" + (teams.name) + "/team-home"}>Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="ps-2 text-white nav-link" to={
                            "/teams/" + (teams.name) + "/team-forum"}>Team Forum</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="ps-2 text-white nav-link" to="https://www.ticketmaster.com/nba/?landing=c&awtrc=true&c=SEM_TMNBA_ggl_1571491344_129894278138_nba%20tickets&GCID=0&gclid=Cj0KCQjwxYOiBhC9ARIsANiEIfZKWNepkIV20sq48euLs0qF2Pf5DOneyD5DXachPuwZpHRHR1AbDrQaAlvCEALw_wcB&gclsrc=aw.ds">Tickets</Link>
                    </li>
                </ul>
                { isCurrent ?
                    <Link to={"edit-team"}>
                        <button className="nav-item float-end rounded-pill a1-bg-blue text-white fw-bold pt-2 pb-2 ps-3 pe-3 me-3 border-0">
                            Edit
                        </button>
                    </Link>
                    :
                    <></>
                }
        </nav>
    </div>

    )
}

export default FollowTeamNav    

