import React from "react";
import { Link } from "react-router-dom";
import { getDatePretty, isfollowing } from "../helper-funcs";


function ProfileStats(data = {user : {}, followers : {}, following : {}})
    {    
    const user = data.data.user;
    const followers = data.data.followers;
    const following = data.data.following;
    
    return (
        <div className="row border-top p-0 m-0">
            <div className="col-6 pb-3 pt-3">
                <div className="a1-font-16px text-dark a1-font-family mt-1">
                    <i className="fa fa-user me-2"></i>
                    {user.name}
                </div>
                <div className="a1-font-16px text-dark a1-font-family mt-1">
                    <i className="fa fa-at me-2"></i>
                    {user.handle}
                </div>
                <div className="a1-font-16px text-dark a1-font-family mt-1">
                    {user.favoriteTeam && user.favoriteTeam !== "None" ?
                        <Link className="text-decoration-none text-dark" to={"/teams/"+user.favoriteTeam}>
                            <i className="fa fa-basketball-ball me-2 text-dark"></i>
                            {user.favoriteTeam}
                        </Link>
                        :
                        <>
                            <i className="fa fa-basketball-ball me-2"></i>
                            {user.favoriteTeam}
                        </>
                    }
                </div>
                <div className="a1-font-16px text-dark a1-font-family mt-1">
                    <i className="fa fa-birthday-cake me-2"></i>
                    {getDatePretty(user.dateOfBirth)}
                </div>
                <div className="a1-font-16px text-dark a1-font-family mt-1">
                    <i className="fa fa-calendar me-2"></i>
                    {getDatePretty(user.dateJoined)}
                </div>
                <div className="a1-font-16px text-dark a1-font-family mt-1">
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    {user.location}
                </div>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-6 m-0 p-0 pt-3">
                        <div className="h4 text-dark a1-font-family fw-bold ms-2">
                            Following : {following.length}
                        </div>
                    </div>
                    <div className="col-6 m-0 p-0 pt-3">
                        <div className="h4 text-dark a1-font-family fw-bold ms-2">
                            Followers : {followers.length}
                        </div>
                    </div>
                </div>
                <div className="hw text-dark a1-font-family mt-2 fw-bold text-center">
                    About Me
                </div>
                <div className="a1-font-16px text-dark a1-font-family mt-2">
                    {user.bio}
                </div>
            </div>
        </div>
    )


}

export default ProfileStats