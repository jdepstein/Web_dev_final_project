import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findIndividualTeamThunk, updateTeamThunk} from "../../thunks/teams-thunks";
import {findUserThunk} from "../../thunks/users-thunks";
import FollowTeamNav from "./followbutton";


function TeamNav() {
    const { teamName } = useParams();
    const {user, currentUser} = useSelector( state => state.UserData)


    let {teams} = useSelector(state => state.teamData)

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(findUserThunk(teamName[0].toUpperCase() + teamName.substring(1)))
        dispatch(findIndividualTeamThunk(teamName))
    }, [])

    
    let isCurrent = false
    if (currentUser !== null){
        if (teamName === currentUser.handle || teamName === currentUser.handle.toLowerCase()){
            isCurrent = true
        }
    }


    return (
        <>
        {teams && user
            ?
            user._id !== undefined && teams._id !== undefined &&
            <FollowTeamNav passeduser={{"team": teams, "user" :user }}/>
            :
            <></>
        }
        </>

    );
    
}
export default TeamNav;






