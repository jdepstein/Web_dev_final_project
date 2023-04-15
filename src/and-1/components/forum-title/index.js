import React from 'react';
import {useSelector} from "react-redux";


function ForumTitle() {

    const {currentUser} = useSelector(state => state.UserData)

    return (

        <div className="text-center a1-forum-background">
            <div className="p-5">
                <div className="inline-block mt-5">
                    {currentUser ?
                    <>
                        <p className="fw-bold a1-font-family a1-text-gradeient mb-0">Welcome</p>
                        <p className="fw-bold a1-font-family a1-text-gradeient mt-0">{currentUser.handle}</p>  
                    </>
                    :
                    <>
                        <p className="fw-bold a1-font-family a1-text-gradeient mb-0">And1</p>
                        <p className="fw-bold a1-font-family a1-text-gradeient mt-0">Forum</p>  
                    </>
                    }
                </div>
            </div>
        </div>

    );
}

export default ForumTitle;