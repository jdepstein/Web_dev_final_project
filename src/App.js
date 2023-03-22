import {BrowserRouter, Form} from "react-router-dom";
import {Routes, Route} from "react-router";
import './App.css';
import Login from "./and-1/login";
import Forum from "./and-1/forum";
import Profile from "./and-1/profile";
import Home from "./and-1/home";
import Stats from "./and-1/stats";
import Schedule from "./and-1/schedule";
import TeamSearch from "./and-1/teams";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route index element={<Login/>}/>
              <Route path="/forum/*" element={<Forum/>}/>
              <Route path="/profile/*" element={<Profile/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/teams/*" element={<TeamSearch/>}/>
              <Route path="/stats" element={<Stats/>}/>
              <Route path="/schedule" element={<Schedule/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
