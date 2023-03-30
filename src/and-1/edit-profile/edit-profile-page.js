import {Link} from "react-router-dom";

function EditProfilePage(profile=

         {
             Name: "Test Person",
             handle: "test",
             profilePicture: "../images/profile1.jpeg",
             bio: " This is a practice bio there is nothing of note to say here this is just a space filler I am writing out to test to see how this ends up looking.",
             location: "Boston, MA",
             dateOfBirth: "1998-01-08",
             dateJoined: "May 2015",
             FavoriteTeam: "Celtics",
             followingCount: 340,
             followersCount: 223,
             banner : "../images/background2.png"
         }


) {
    return (
        <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center p-0 m-0">
            <div className="h3 text-dark a1-font-family fw-bold mt-3 mb-2 ms-2">
            <span>
                Editing Profile
            </span>
            <i className="float-end fa fa-x me-3"></i>
            </div>
            <img alt="" src={profile.profile.banner} className="opacity-50 a1-banner w-100"/>
            <div className="row position-relative mb-5">
                <div className="col-5">
                    <img alt="" src={profile.profile.profilePicture} className="opacity-50 a1-image_146_round a1-pos-profile position-absolute border border-5 border-white m-0 p-0"/>
                </div>
            </div>
            <input></input>
        </div>
    );
}

export default EditProfilePage;