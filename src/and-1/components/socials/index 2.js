import socials from "../../data/socials.json";
import SocialItem from "./socialitem";

function Socials() {
    return (
        <>
        <div className="container-fluid a1-font-family d-none d-lg-block col-lg-2 col-xl-3 p-0">
            {
                socials.map((social, i) =>
                    <SocialItem key={i} social={social}/>
                )
            }
            <div className="wd-text-medium-gray mt-3 float-start ms-2" >
                <a href="#" className="text-secondary a1-no_underline">Terms of Service</a>
                <a href="#"  className="text-secondary a1-no_underline">Privacy Policy</a>
                <a href="#"  className="text-secondary a1-no_underline">Cookie Policy</a><br/>
                <a href="#"  className="text-secondary a1-no_underline">Accessibility</a>
                <a href="#"  className="text-secondary a1-no_underline">Ads info</a>
                <a href="#"  className="text-secondary a1-no_underline">More ...</a><br/>
                <span className="text-secondary"> © 2023 And1, Inc. </span>
            </div>
            </div>
        </>
    );
}

export default Socials;