import {useLocation} from "react-router";
import {Link} from "react-router-dom";

const SidebarItem = (
    {
        nav = {
            icon: 'fab fa-twitter',
            link: '#',
            text: 'null'
        }
    }) => {

    const {pathname} = useLocation();
    const paths = pathname.split('/')
    let active = paths[1];
    const lowercase_text = nav.text.toLowerCase();
    if  (paths.length < 2 || active === '') {
        active = "home";
    }
    return (
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
    );
}
export default SidebarItem;
