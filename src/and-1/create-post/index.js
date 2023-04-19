import {Link} from "react-router-dom";

function CreatePost(data) {
    console.log(data)
    if (!data.data) {
        data = {from_team : "None", pid: "-1"}
    }
    else {
        data = data.data
    }
    return (
            <div className="row m-0 border-bottom mb-3">
                <div className="mb-3 justify-content-center w-100 col-10 mt-3">
                        <Link to={"/forum/create-post/"+data.from_team+"/"+data.player} className="text-decoration-none">
                            <div className="ms-3 rounded border wd-bg-off-white ">
                                <div className="input-group">
                                    <span className="bg-transparent border-0 input-group-text" id="basic-addon2">
                                        <i className="fa fa-user text-black"></i>
                                    </span>
                                    <input type="text" className="shadow-none border-0 bg-transparent test-dark form-control" placeholder="Write Post" aria-label="Search Tuiter" aria-describedby="basic-addon2"/>
                                </div>
                            </div>
                        </Link>
                </div>
            </div>

    );
}

export default CreatePost;