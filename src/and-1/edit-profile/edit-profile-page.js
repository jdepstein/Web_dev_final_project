import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTeamsThunk} from "../thunks/teams-thunks";


function EditProfilePage(profile=

         {
             Name: "Test Person",
             handle: "test",
             profilePicture: "../images/profile1.jpeg",
             bio: " This is a practice bio there is nothing of note to say here this is just a space filler I am writing out to test to see how this ends up looking.",
             location: "Boston, MA",
             dateOfBirth: "1998-01-08",
             dateJoined: "May 2015",
             FavoriteTeam: "heat",
             followingCount: 340,
             followersCount: 223,
             banner : "../images/background2.png"
         }


) {
    const {teams, loading} = useSelector(
        state => state.teamData)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTeamsThunk())
    }, [])




    return (
        <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center p-0 m-0">
            <div className="h3 text-dark a1-font-family fw-bold mt-3 mb-2 ms-2">
            <span>
                Editing Profile
            </span>
                <Link className="text-decoration-none" to="/profile"><i className="float-end fa fa-x me-3 text-dark"></i></Link>
            </div>
            <img alt="" src={profile.profile.banner} className="opacity-50 a1-banner w-100"/>
            <div className="row position-relative">
                <div className="col-5 mb-5">
                    <img alt="" src={profile.profile.profilePicture} className="opacity-50 a1-image_146_round a1-pos-profile position-absolute border border-5 border-white m-0 p-0"/>
                </div>
                <div className="col-7 mt-2">
                    <Link to="/profile"><button className="a1-bg-blue rounded-pill pt-2 pb-2 ps-3 pe-3 text-white fw-bold float-end me-2">Save</button></Link>
                </div>
            </div>
            <div className="ms-4 mt-5 row">
                <div className="col-6">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input id="name" className="form-control w-50 mb-4" value={profile.profile.Name}></input>

                    <label className="form-label" htmlFor="location"> Location</label>
                    <input id="location" className="form-control w-50 mb-4" value={profile.profile.location}></input>

                    <label className="form-label" htmlFor="DOB"> Date of Birth</label>
                    <input type="date" id="DOB" className="form-control w-50 mb-4" value={profile.profile.date}></input>

                </div>
                <div className="col-6">
                    <label className="form-label" htmlFor="Bio"> Bio </label>
                    <textarea id="Bio" className="form-control w-75 mb-4" value={profile.profile.bio}></textarea>
                    <label className="form-label" htmlFor="FavoriteTeam"> Favorite Team</label>
                    <select  className="form-control w-50 shadow-none mt-3">
                        {
                            teams.map(team =>
                                {
                                    if (team.name === profile.profile.FavoriteTeam.toLowerCase()) {
                                        return(
                                            <option value={team.name}>
                                                {team.name}
                                            </option>
                                        )
                                    }
                                    else {
                                        return(
                                            <option value={team.name}>
                                                {team.name}
                                            </option>
                                        )
                                    }
                                }
                            )
                        }
                        <option value="general">
                            No Favorite
                        </option>
                    </select>
                </div>
            </div>

        </div>
    );
}

export default EditProfilePage;