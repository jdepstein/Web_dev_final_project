import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import './App.css';
import Login from "./and-1/login";
import Home from "./and-1/home";
import Stats from "./and-1/stats";
import Schedule from "./and-1/schedule";
import CreateAccount from "./and-1/login/create_account";
import TeamRouting from "./and-1/teams/team-routing";
import ForumRouting from "./and-1/forum/forum-routing";
import ProfileRouting from "./and-1/profile/profile-routing";

import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import PostsReducer from "./and-1/reducers/posts-reducer";
import TeamsReducer from "./and-1/reducers/teams-reducer";
import TeamUsersReducer from "./and-1/reducers/team-users-reducer";
import usersReducer from "./and-1/reducers/users-reducer";


const store = configureStore(
    {reducer:
            {
                postData: PostsReducer,
                teamData: TeamsReducer,
                teamUserData: TeamUsersReducer,
                UserData: usersReducer
            }});


function App() {
  return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="login" element={<Login/>}/>
                    <Route path="create_account" element={<CreateAccount/>}/>
                    <Route path="forum/*" element={<ForumRouting/>}/>
                    <Route path="profile/*" element={<ProfileRouting/>}/>
                    <Route index element={<Home/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="teams/*" element={<TeamRouting/>}/>
                    <Route path="stats" element={<Stats/>}/>
                    <Route path="schedule" element={<Schedule/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>



  );
}

export default App;
