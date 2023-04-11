import {Link} from "react-router-dom";


import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


import {createUserThunk, findAllUsersThunk }
    from "../thunks/users-thunks";


function CreateAccount() {
    let [newUserEmail, setNewUserEmail] = useState('');
    let [newUserUsername, setNewUserUsername] = useState('');
    let [newUserPassword, setNewUserPassword] = useState('');
    let [newUserFullName, setNewUserFullName] = useState('');
    let [newUserType, setNewUserType] = useState('user');
    const [profile, setProfile] = useState({})
    const dispatch = useDispatch();

    const {user, loading} = useSelector(
        state => state.UserData)

    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])

    const newUserHandler = () => {
        const newUser = {
            email: newUserEmail,
            handle: newUserUsername,
            password: newUserPassword,
            name: newUserFullName,
            type: newUserType,
        }
        
        if (user.find(user => user.handle === newUserUsername) !== undefined) {
            alert("Username already exists", profile)
        }

        else if(newUserEmail === "" || newUserUsername === "" || newUserPassword === "" || newUserFullName === "" || newUserType === "") {
            alert("Please fill out all fields")
        }
        else {
            dispatch(createUserThunk(newUser));
            setNewUserEmail("");
            setNewUserUsername("");
            setNewUserPassword("");
            setNewUserFullName("");
            setNewUserType("");
            window.location.replace("/home");
        }
    }

    return (
        <div className="a1-login-background w-100">
            <div className="center">
                <div className="center_box a1-login-section rounded p-3">
                    <p className="fw-bold a1-font-family h3 text-center mt-2 text-white"> Create Account </p>
                    <form>

                        <div className="form-group mb-3">
                                <label className="fw-bold ms-2 a1-font-family h5 text-center mt-2 text-white"
                                    htmlFor="name">Full Name</label>
                                <div className="me-2 ms-2">
                                    <input type="name" className="me-3 rounded-pill form-control text-dark" id="name"
                                         onChange={(event) => setNewUserFullName(event.target.value)}
                                             placeholder="Enter Name"
                                        />
                                </div>
                        </div>


                        <div className="form-group mb-3">
                            <label className="fw-bold ms-2 a1-font-family h5 text-center mt-2 text-white"
                                   htmlFor="email">Enter Email</label>
                            <div className="me-2 ms-2">
                                <input type="email" className="me-3 rounded-pill form-control text-dark" id="email"
                                       placeholder="Enter Email"
                                       onChange={(event) => setNewUserEmail(event.target.value)} />
                            </div>
                        </div>


                        <div className="form-group mb-3">
                            <label className="fw-bold ms-2 a1-font-family h5 text-center mt-2 text-white"
                                   htmlFor="username">Enter Username</label>
                            <div className="me-2 ms-2">
                                <input className="rounded-pill form-control text-dark" id="username"
                                       placeholder="Enter username"
                                       onChange={(event) => setNewUserUsername(event.target.value)}
                                       />
                            </div>
                        </div>


                        <div className="form-group mb-3">
                            <label className="fw-bold ms-2 a1-font-family h5 text-center mt-2 text-white"
                                   htmlFor="password_initial">Enter Password</label>
                            <div className="me-2 ms-2">
                                <input type="password" className="me-3 rounded-pill form-control text-dark" id="password_initial"
                                       placeholder="Enter password"
                                       onChange={(event) => setNewUserPassword(event.target.value)}
                                       />
                            </div>
                        </div>

                        <div className="form-group mb-3">
                            <label className="fw-bold ms-2 a1-font-family h5 text-center mt-2 text-white"
                                    htmlFor="user_type">Select Profile Type</label>
                            <div className="me-2 ms-2">
                                <select id="user_type" className="me-3 rounded-pill form-control text-dark w-50"
                                    onChange={(event) => setNewUserType(event.target.value)}>   
                                    <option defaultValue  value="user">User</option>
                                    <option value="team">Team</option>
                                </select>    
                            </div>
                         </div>

                        <div className="form-group mb-3 d-flex justify-content-center">
                            <Link to="/login"><button className="btn rounded-pill btn-primary me-3"> Cancel</button></Link>
                            <button className="btn rounded-pill btn-primary ms-3"
                                onClick={() => newUserHandler()} > 
                                Create Account
                                </button>
                        </div>

                    </form>
                    <form>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default CreateAccount;