import {BrowserRouter, Form} from "react-router-dom";
import {Routes, Route} from "react-router";
import './App.css';
import Login from "./and-1/login";
import Forum from "./and-1/forum";
import Profile from "./and-1/profile";
import Home from "./and-1/home";
import Stats from "./and-1/stats";
import Schedule from "./and-1/schedule";
import CreateAccount from "./and-1/login/creat_account";
import TeamRouting from "./and-1/teams/team_routing";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/create_account" element={<CreateAccount/>}/>
              <Route path="/forum/*" element={<Forum/>}/>
              <Route path="/profile/*" element={<Profile/>}/>
              <Route index element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/teams/*" element={<TeamRouting/>}/>
              <Route path="/stats" element={<Stats/>}/>
              <Route path="/schedule" element={<Schedule/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
