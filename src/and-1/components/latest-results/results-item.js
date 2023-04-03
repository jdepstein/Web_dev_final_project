import {get_team} from "../../helper-funcs";

const ResultsItem = (
    {
        result = {
            Team1: "Celtics",
            Team2: "",
            Team1Score: 111,
            Team2Score: 130
        },
    }) => {

    const team1 = get_team(result.Team1.toLowerCase());
    const team2 = get_team(result.Team2.toLowerCase());
    return (
      <>
          <div className="text-dark fw-normal a1-font-size-15px ">
              Final
              <div>
                <img alt="" className="float-start a1-logo-image-2 me-2 mb-2 mt-2" src={team1.logo}/>
                <span className="fw-bold float-end mt-2">{result.Team1Score}</span>
              </div>
              <div>
              <img alt="" className="float-start a1-logo-image-2 me-2 " src={team2.logo}/>
              <span className="fw-bold float-end">{result.Team2Score}</span><br/>
              </div>
          </div>
      </>
    );
}
export default ResultsItem;