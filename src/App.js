import {BrowserRouter, Form} from "react-router-dom";
import {Routes, Route} from "react-router";
import './App.css';
import Login from "./and-1/login";
import Profile from "./and-1/profile";
import Home from "./and-1/home";
import Stats from "./and-1/stats";
import Schedule from "./and-1/schedule";
import CreateAccount from "./and-1/login/create_account";
import TeamRouting from "./and-1/teams/team-routing";
import ForumRouting from "./and-1/forum/forum-routing";
import ProfileRouting from "./and-1/profile/profile-routing";


function App() {
  return (
        <BrowserRouter>
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
        </BrowserRouter>



  );
}

export default App;
