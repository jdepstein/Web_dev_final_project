function ScheduleItem() {
    const API_CALLS = {} 
    return (
        <>
        <ul className="list-group">
            <li className="list-group-item">
                <h5> Wednesday, February 15, 2023</h5>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> Away</th>
                            <th scope="col"> Home</th>
                            <th scope="col"> Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td><img className = "a1-logo-image-2 inline logo_margin" src="../images/spurs.png" alt=""/>San Antonio </td>
                            <td><img className = "a1-logo-image-2 inline logo_margin" src="../images/hornets.png" alt=""/>Charlotte</td>
                            <td> 7:00 PM</td>
                        </tr>
                    </tbody>
                </table>

            </li>
            <li className="list-group-item">
                <h5> Thursday, February 16, 2023</h5>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> Away</th>
                            <th scope="col"> Home</th>
                            <th scope="col"> Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td><img className = "a1-logo-image-2 inline logo_margin" src="../images/bucks.png" alt=""/>Milwaukee </td>
                            <td><img className = "a1-logo-image-2 inline logo_margin" src="../images/bulls.png" alt=""/>Chicago</td>
                            <td> 7:30 PM</td>
                        </tr>
                    </tbody>
                </table>
            </li>


            <li className="list-group-item">
                <h5> Thursday, February 16, 2023</h5>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> Away</th>
                            <th scope="col"> Home</th>
                            <th scope="col"> Time</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>

                        <td><img className = "a1-logo-image-2 inline logo_margin" src="../images/bucks.png" alt="" />Milwaukee </td>
                        <td><img className = "a1-logo-image-2 inline logo_margin" src="../images/bulls.png" alt="" />Chicago</td>
                        <td> 7:30 PM</td>
                    </tr>
                </tbody>
                </table>
            </li>
            <li className="list-group-item">
                <h5> Friday, February 17, 2023</h5>
                <p> No games scheduled</p>
            </li>
            </ul>
        </>

    );
}

export default ScheduleItem;