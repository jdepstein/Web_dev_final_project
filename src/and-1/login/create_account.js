import {Link} from "react-router-dom";

function CreateAccount() {
    return (
        <div className="a1-login-background w-100">
            <div className="center">
                <div className="center_box a1-login-section rounded p-3">
                    <p className="fw-bold a1-font-family h3 text-center mt-2 text-white"> Create Account </p>
                    <form>
                        <div className="form-group mb-3">
                            <label className="fw-bold ms-2 a1-font-family h5 text-center mt-2 text-white"
                                   htmlFor="email">Enter Email</label>
                            <div className="me-2 ms-2">
                                <input type="email" className="me-3 rounded-pill form-control text-white" id="email"
                                       placeholder="Enter Email"/>
                            </div>
                        </div>


                        <div className="form-group mb-3">
                            <label className="fw-bold ms-2 a1-font-family h5 text-center mt-2 text-white"
                                   htmlFor="username">Enter Username</label>
                            <div className="me-2 ms-2">
                                <input className="rounded-pill form-control text-white" id="username"
                                       placeholder="Enter username"/>
                            </div>
                        </div>


                        <div className="form-group mb-3">
                            <label className="fw-bold ms-2 a1-font-family h5 text-center mt-2 text-white"
                                   htmlFor="password_initial">Enter Password</label>
                            <div className="me-2 ms-2">
                                <input className="me-3 rounded-pill form-control text-white" id="password_initial"
                                       placeholder="Enter password"/>
                            </div>
                        </div>

                        <div className="form-group mb-3">
                            <label className="fw-bold ms-2 a1-font-family h5 text-center mt-2 text-white"
                                   htmlFor="password_repeated">Re-Enter Password</label>
                            <div className="me-2 ms-2">
                                <input className="me-3 rounded-pill form-control text-white" id="password_repeated"
                                       placeholder="Re-Enter password"/>
                            </div>
                        </div>


                        <div className="form-group mb-3 d-flex justify-content-center">
                            <Link to="/login"><button className="btn rounded-pill btn-primary me-3"> Cancel</button></Link>
                            <Link to="/home"><button className="btn rounded-pill btn-primary ms-3"> Create Account</button></Link>
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