
// Календарь лиги - список матчей лиги

import { Link } from "react-router-dom";
import { AppRoute } from "./const";
 
const CalendarOneLeague = () => {

    return (
        <Link className="league-link" to={AppRoute.LEAGUECALENDAR}>
           <h2>- Календарь лиги - список матчей лиги </h2>
        </Link>
    )
}

export default CalendarOneLeague;