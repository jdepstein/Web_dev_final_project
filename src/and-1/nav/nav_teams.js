import east from "./eastern.json";
import Teams from "./teams";
function NavTeams() {
    return (
        <>
            <li className="nav-item">
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink"
                               role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                Teams
                            </a>
                            <ul className="a1-width-600px dropdown-menu a1-bg-blue"
                                aria-labelledby="navbarDarkDropdownMenuLink">
                                <li className="row mt-2">
                                    {
                                    east.map((division,i) =>
                                        <Teams key={i} my_teams={division}/>)
                                    }
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
        </>
    );
}

export default NavTeams;

/*
          <li class="nav-item">
            <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a class="nav-link text-white dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Teams
                  </a>
                  <ul class="a1-width-600px dropdown-menu a1-bg-blue" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li class="row mt-2">
                      <ul class="col-4 a1-no-bullet-pts">
                        <li class="text-white ps-2 fw-bold">Atlantic</li>
                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/celtics.png">
                            Celtics
                          </a>
                        </li>
                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/nets.png">
                            Nets
                          </a>
                        </li>
                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/knicks.png">
                            Knicks
                          </a>
                        </li>
                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/76ers.png">
                            76ers
                          </a>
                        </li>
                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/raptors.png">
                            Raptors
                          </a>
                        </li>
                      </ul>

                      <ul class="col-4 a1-no-bullet-pts">
                        <li class="text-white ps-2 fw-bold"> Central</li>
                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/bulls.png">
                            Bulls
                          </a>
                        </li>

                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/cavs.png">
                            Cavaliers
                          </a>
                        </li>

                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/pistons.png">
                            Pistons
                          </a>
                        </li>

                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/pacers.png">
                            Pacers
                          </a>
                        </li>

                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/bucks.png">
                            Bucks
                          </a>
                        </li>
                      </ul>

                      <ul class="col-4 a1-no-bullet-pts">
                        <li class="text-white ps-2 fw-bold">Southeast</li>

                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/hawks.png">
                            Hawks
                          </a>
                        </li>

                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/hornets.png">
                            Hornets
                          </a>
                        </li>

                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/heat.png">
                            Heat
                          </a>
                        </li>


                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/magic.png">
                            Magic
                          </a>
                        </li>

                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/wizards.png">
                            Wizards
                          </a>
                        </li>
                      </ul>
                    </li>


                    <li class="row mt-2">
                      <ul class="col-4 a1-no-bullet-pts">
                        <li class="text-white ps-2 fw-bold">Northwest</li>

                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/nuggets.png">
                            Nuggets
                          </a>
                        </li>

                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/timberwolves.png">
                            Timberwolves
                          </a>
                        </li>

                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/thunder.png">
                            Thunder
                          </a>
                        </li>

                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/trail-blazers.png">
                            Trail Blazers
                          </a>
                        </li>

                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/jazz.png">
                            Jazz
                          </a>
                        </li>
                      </ul>

                      <ul class="col-4 a1-no-bullet-pts">
                        <li class="text-white ps-2 fw-bold">Pacific</li>

                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/warriors.png">
                            Warriors
                          </a>
                        </li>

                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/clippers.png">
                            Clippers
                          </a>
                        </li>


                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/lakers.png">
                            Lakers
                          </a>
                        </li>


                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/suns.png">
                            Suns
                          </a>
                        </li>

                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/kings.png">
                            Kings
                          </a>
                        </li>
                      </ul>

                      <ul class="col-4 a1-no-bullet-pts">
                        <li class="text-white ps-2 fw-bold">Southwest</li>
                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/mavs.png">
                            Mavericks
                          </a>
                        </li>

                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/rockets.png">
                            Rockets
                          </a>
                        </li>

                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/grizzles.png">
                            Grizzles
                          </a>
                        </li>

                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/pelicans.png">
                            Pelicans
                          </a>
                        </li>

                        <li>
                          <a class="text-white dropdown-item" href="#">
                            <img alt="" class="a1-logo-image" src="../images/spurs.png">
                            Spurs
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>

 */