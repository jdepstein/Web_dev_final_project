import NavigationSidebar from "../sidebars/nav";
import Standings from "../sidebars/standings";

function Home() {
    return (
        <div className="row">
        <NavigationSidebar/>
            <div className="container-fluid col-9 col-lg-7 col-xl-8 p-0 border-start border-end align-content-center">
                Home
            </div>
            <Standings/>
        </div>
    );
}

export default Home;