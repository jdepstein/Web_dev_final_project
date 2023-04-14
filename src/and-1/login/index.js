import {Link} from "react-router-dom";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk, logoutThunk} from "../thunks/users-thunks";


//SET UP LOGIN CHECK HERE AND REDIRECT TO HOME IF LOGGED IN
// SET UP SESSION HERE

function Login() {
    const [handle, setHandle] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            const logged = await dispatch(loginThunk({ handle, password }));
            navigate('/')
        } catch (e) {
            alert("Login failed");
        }
       };
      


    return (
        <div className="a1-login-background w-100">
            <div className="center">
                <div className="center_box a1-login-section rounded p-3">
                    <p className="text-white fw-bold a1-font-family h3 text-center mt-2"> Login </p>
                    <form>
                        <div className="form-group mb-3">
                            <label className="text-white fw-bold ms-2 a1-font-family h5 text-center mt-2"
                                   htmlFor="username">Username</label>
                            <div className="me-2 ms-2">
                                <input className="me-3 rounded-pill form-control" id="username"
                                       placeholder="Enter username"
                                       onChange={(event) => setHandle(event.target.value)}/>
                            </div>
                        </div>

                        <div className="form-group mb-3">
                            <label className="text-white fw-bold ms-2 a1-font-family h5 text-center mt-2"
                                   htmlFor="password">Password</label>
                            <div className="me-2 ms-2">
                                <input type="password" className="me-3 rounded-pill form-control" id="password"
                                       placeholder="Enter password"
                                       onChange={(event) => setPassword(event.target.value)}/>
                            </div>
                        </div>

                        <div className="form-group mb-3 d-flex justify-content-center">
                            <button className="btn rounded-pill btn-primary me-3"
                                type="button"
                                onClick={handleLogin}> 
                                Login
                            </button>
                            <Link to="/create_account"><button className="btn rounded-pill btn-primary ms-3"> Create Account</button></Link>
                        </div>

                    </form>
                    <form>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;