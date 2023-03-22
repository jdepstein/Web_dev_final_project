import Nav from "../nav";
import Standings from "../sidebars/standings";
import Socials from "../sidebars/socials";

function Home() {
    return (
        <>
            <Nav/>
            <div className="row container-fluid">
                <Standings/>
                <div className="container-fluid col-md-9 col-lg-7 col-xl-7 p-0 border-start border-end">
                    hello test
                </div>
                <Socials/>
            </div>
        </>
    );
}

export default Home;