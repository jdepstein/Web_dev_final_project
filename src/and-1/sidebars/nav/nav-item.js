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
    const active = false
    return (
        <Link to={"/" + nav.link} className="wd-no-underline">
            <i className=
                   {` float-start me-2 pt-1 ${nav.icon}
                       ${active ? 'wd-text-blue':'text-dark'}
                       `}>
            </i>
            <p className=
                   {`${nav.text ? 'd-none d-xl-block ' : 'd-none'} 
                            ${active ? 'wd-text-blue':'text-dark'}
                          float-start p-0 m-0`}>
                {nav.text}
            </p>
        </Link>
    );
}
export default SidebarItem;
