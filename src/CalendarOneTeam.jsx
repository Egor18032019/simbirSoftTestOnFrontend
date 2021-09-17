//Календарь одной команды - список матчей команды

import { Link } from "react-router-dom";
import { AppRoute } from "./const";
 
const CalendarOneTeam = () => {

    return (
        <Link className="league-link" to={AppRoute.TEAMCALENDAR}>
           <h2>- Календарь одной команды - список матчей команды</h2>
        </Link>
    )
}

export default CalendarOneTeam;