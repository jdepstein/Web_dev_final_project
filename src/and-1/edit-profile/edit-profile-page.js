import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTeamsThunk} from "../thunks/teams-thunks";
import {updateUserThunk} from "../thunks/users-thunks";
import { useNavigate } from "react-router-dom";



function EditProfilePage()

 {
    const {teams} = useSelector(state => state.teamData)
    const {currentUser} = useSelector( state => state.UserData)
    const [profile, setProfile] = useState(currentUser)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        let ignore = false;
        dispatch(findTeamsThunk()).then(result => {
            if (!ignore) {
                setProfile(currentUser)
                if (profile === null || currentUser === null ){
                    navigate("/login")
                }
            }
        });
        return () => {
          ignore = true;
        };
    }, [])


    const updateUserName = (target) => {setProfile({...profile,  name: target})}
    const updateUserLocation = (target) => {setProfile({...profile, "location": target})}
    const updateUserBio = (target) => {setProfile({...profile, "bio": target})}
    const updateUserTag = (target) => {setProfile({...profile, "favoriteTeam": target})}
    const updateUserDateOfBirth = (target) => {setProfile({...profile, "dateOfBirth": target})}
    const updateUserEmail = (target) => {setProfile({...profile, "email": target})}


    return (
        <>
        {profile !== null && teams.length &&
            <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center p-0 m-0">
                <div className="h3 text-dark a1-font-family fw-bold mt-3 mb-2 ms-2">
                <span>
                    Editing Profile
                </span>
                    <Link className="text-decoration-none" to="/profile"><i className="float-end fa fa-x me-3 text-dark"></i></Link>
                </div>
                <img alt="" src={profile.banner} className="opacity-50 a1-banner w-100"/>
                <div className="row position-relative">
                    <div className="col-5 mb-5">
                        <img alt="" src={profile.profilePicture} className="opacity-50 a1-image_146_round a1-pos-profile position-absolute border border-5 border-white m-0 p-0"/>
                    </div>
                    <div className="col-7 mt-2">
                        <Link to="/profile">
                            <button className="a1-bg-blue rounded-pill pt-2 pb-2 ps-3 pe-3 text-white fw-bold float-end me-2 border-0"
                                    onClick={() => dispatch(updateUserThunk(profile))}
                                >
                                Save
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="ms-4 mt-5 row">
                    <div className="col-6">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input id="name" className="form-control w-50 mb-4" value={profile.name}
                            onChange={(e) => updateUserName(e.target.value)}
                        ></input>

                        <label className="form-label" htmlFor="location"> Location</label>
                        <input id="location" className="form-control w-50 mb-4" value={profile.location}
                            onChange={(e) => updateUserLocation(e.target.value)}>
                        </input>

                        <label className="form-label" htmlFor="DOB"> Date of Birth</label>
                        <input type="date" id="DOB" className="form-control w-50 mb-4" value={profile.dateOfBirth}
                            onChange={(e) => updateUserDateOfBirth(e.target.value)}
                        ></input>

                    </div>
                    <div className="col-6">
                        <label className="form-label" htmlFor="Bio"> Bio </label>
                        <textarea id="Bio" className="form-control w-75 mb-4" value={profile.bio}
                            onChange={(e) => updateUserBio(e.target.value)}
                        ></textarea>
                        <label className="form-label" htmlFor="email"> email</label>
                        <input  id="email" className="form-control w-50 mb-4" value={profile.email}
                            onChange={(e) => updateUserEmail(e.target.value)}
                        ></input>


                        <label className="form-label" htmlFor="FavoriteTeam"> Favorite Team</label>
                        <select  className="form-control w-50 shadow-none mt-3"
                            onChange={(e) => updateUserTag(e.target.value)}
                            >
                            {
                                teams.map(team =>

                                    {
                                        if (profile.FavoriteTeam === undefined) {
                                            return(
                                                <option key={team.name} value={team.name}>
                                                    {team.name}
                                                </option>
                                            )
                                        }
                                        if (team.name === profile.FavoriteTeam.toLowerCase()) {
                                            return(
                                                <option key={team.name} selected value={team.name}>
                                                    {team.name}
                                                </option>
                                            )
                                        }
                                        else {
                                            return(
                                                <option key={team.name} value={team.name}>
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
        }
       </>
    );
}

export default EditProfilePage;