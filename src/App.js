import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import './App.css';
import Login from "./and-1/login";
import Home from "./and-1/home";
import Stats from "./and-1/standings";
import Schedule from "./and-1/schedule";
import CreateAccount from "./and-1/login/create_account";
import TeamRouting from "./and-1/teams/team-routing";
import ForumRouting from "./and-1/forum/forum-routing";
import ProfileRouting from "./and-1/profile/profile-routing";
import AdminPage from "./and-1/admin-page";

import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import PostsReducer from "./and-1/reducers/posts-reducer";
import TeamsReducer from "./and-1/reducers/teams-reducer";
import usersReducer from "./and-1/reducers/users-reducer";
import LoadProfile from "./and-1/components/load-profile";
import PlayerRouting from "./and-1/players/player-routing";



const store = configureStore(
    {reducer:
            {
                postData: PostsReducer,
                teamData: TeamsReducer,
                UserData: usersReducer
            }});


function App() {
  return (

        <BrowserRouter>
            <Provider store={store}>
                <LoadProfile>
                    <Routes>
                        <Route path="login" element={<Login/>}/>
                        <Route path="create_account" element={<CreateAccount/>}/>
                        <Route path="forum/*" element={<ForumRouting/>}/>
                        <Route path="profile/*" element={<ProfileRouting/>}/>
                        <Route index element={<Home/>}/>
                        <Route path="home" element={<Home/>}/>
                        <Route path="teams/*" element={<TeamRouting/>}/>
                        <Route path="standings" element={<Stats/>}/>
                        <Route path="schedule" element={<Schedule/>}/>
                        <Route path="admin" element= {<AdminPage/>} />
                        <Route path="players/*" element={<PlayerRouting/>}/>
                    </Routes>
                </LoadProfile>
            </Provider>
        </BrowserRouter>




  );
}

export default App;
