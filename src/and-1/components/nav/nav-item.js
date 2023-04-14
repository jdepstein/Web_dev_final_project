import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {logoutThunk} from "../../thunks/users-thunks";
import {useDispatch} from "react-redux";


function SidebarItem(
    {
        nav = {
            icon: 'fab fa-twitter',
            link: '#',
            text: 'null'
        }
    })  {

    const {currentUser} = useSelector( 
        state => state.UserData)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    let active = paths[1];
    const lowercase_text = nav.text.toLowerCase();
    if  (paths.length < 2 || active === '') {
        active = "home";
    }




    return (
            <>
                {!currentUser && lowercase_text === 'profile' ?
                    <Link onClick={window.location.reload} to={"/login"} className="wd-no-underline">
                        <i  className=
                            {`float-start me-2 pt-1 ${nav.icon}
                                ${active === lowercase_text ? 'a1-text-red':'text-dark'}
                                `}>
                        </i>
                        <p className=
                            {`${nav.text ? 'd-none d-xl-block ' : 'd-none'} 
                                        ${active === lowercase_text ? 'a1-text-red':'text-dark'}
                                    float-start p-0 m-0`}>
                            {nav.text}
                        </p>
                    </Link>
                    :
                currentUser && lowercase_text === 'profile' && currentUser.role === "team" ?
                    <> 
                        <Link onClick={window.location.reload} to={"/teams/" + currentUser.handle} className="wd-no-underline">
                            <i  className=
                                {`float-start me-2 pt-1 ${nav.icon}
                                    ${active === lowercase_text ? 'a1-text-red':'text-dark'}
                                    `}>
                            </i>
                            <p className=
                                {`${nav.text ? 'd-none d-xl-block ' : 'd-none'} 
                                            ${active === lowercase_text ? 'a1-text-red':'text-dark'}
                                        float-start p-0 m-0`}>
                                {nav.text}
                            </p>
                        </Link>
                    </>
                    :
                currentUser && lowercase_text === 'logout' ?

                    <>    
                        <button type="button" className="wd-no-underline m-0 a1-bg-red border-0 rounded-pill ps-3 pe-3 pt-2 pb-2"
                            onClick={() => {
                                dispatch(logoutThunk());
                                navigate("/");
                              }}
                            >
                            <i  className= {`float-start me-2 pt-1 text-dark ${nav.icon}`}></i>
                            <p className=
                                {`${nav.text ? 'd-none d-xl-block ' : 'd-none'} float-start p-0 m-0`}>
                                {nav.text}
                            </p>
                        </button>
                    </>

                    :
                
                    lowercase_text !== 'logout' ?

                    <>    
                        <Link onClick={window.location.reload} to={"/" + nav.link} className="wd-no-underline">
                            <i  className=
                                {`float-start me-2 pt-1 ${nav.icon}
                                    ${active === lowercase_text ? 'a1-text-red':'text-dark'}
                                    `}>
                            </i>
                            <p className=
                                {`${nav.text ? 'd-none d-xl-block ' : 'd-none'} 
                                            ${active === lowercase_text ? 'a1-text-red':'text-dark'}
                                        float-start p-0 m-0`}>
                                {nav.text}
                            </p>
                        </Link>
                    </>
                    :
                    <></>
                }
            </>
   
    );
}
export default SidebarItem;