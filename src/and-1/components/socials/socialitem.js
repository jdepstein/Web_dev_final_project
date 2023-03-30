import {Link} from "react-router-dom";


function SocialItem(
    social =
        {
            name : "",
            links :
                [
                {icon: "",
                sizing : "",
                link : ""}
                ]
        }
    )
    {
    return (
        <div className="text-center fw-bold mt-4 me-0 ms-0">
            {social.social.name}
            <div className="mt-2">
                <ul className="justify-content-center list-group list-group-horizontal m-0">
                    {
                        social.social.links.map( (item,i) =>
                            <li key={i} className="border-0 list-group-item p-0 p-1">
                                <Link to={item.link} className="no-underline">
                                    <img alt="" className={item.sizing} src={item.icon}/>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}export default SocialItem;