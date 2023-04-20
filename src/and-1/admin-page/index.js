
import React from 'react'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'


import ApiLatestResults from "../components/latest-results/api-index";
import NavigationSidebar from '../components/nav'
import Standings from '../components/standings'
import AdminPageItem from './adminPageItem'

import {findAllUsersThunk} from '../thunks/users-thunks'





function AdminPage () {
    const {currentUser, user} = useSelector(state => state.UserData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])


    if (!currentUser || currentUser.role !== "admin") {
        return (
          <>
            <ApiLatestResults/>
            <div className="row p-0 m-0">
                <NavigationSidebar/>
                <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                   Not Authorized please return to the home page.
                </div>
                <Standings/>
            </div>
        </>
        )
    }

  return (
    <>
        {currentUser && currentUser.role === "admin" &&
             <>
             <ApiLatestResults/>
             <div className="row p-0 m-0">
                 <NavigationSidebar/>
                 <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center mb-5">
                    <ul className="list-group mt-2">
                    {
                        user.map((user, i) =>
                          <div key={user._id}>
                            {user.role !== "admin" &&
                              <AdminPageItem user={user} key={i}/>
                            }
                          </div>        
                        )
                    }
                    </ul>
                  </div>
                 <Standings/>
             </div>
         </>
        }
    </>

  )
}

export default AdminPage