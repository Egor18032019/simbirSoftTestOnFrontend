import { Link } from "react-router-dom";
import { AppRoute } from "./const";


//Список лиг
const Main = () => {

    return (
        <Link className="league-link" to={AppRoute.LEAGUES}>
           <h2>- Список лиг/соревнований </h2>
        </Link>
    )
}

export default Main;