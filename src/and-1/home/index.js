import Nav from "../nav";
import Standings from "../sidebars/standings";

function Home() {
    return (
        <>
            <Nav/>
            <div className="row container-fluid">
                <Standings/>
            </div>
            Home
        </>
    );
}

export default Home;