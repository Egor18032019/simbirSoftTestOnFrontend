import React, { useState, useEffect } from 'react';
import { getListLeagues } from "./api.js"
import { Link } from "react-router-dom";
 //Список лиг
const ListOfLeagues = (props) => {
    let [leagues, setleagues] = useState([]);
    useEffect(() => {
        getListLeagues()
            .then(data => {
                setleagues(data.competitions)
            })
    }, []);

  

    const onCityNameClick = (id) => {
        console.log(id)
    }
    if (leagues.length > 0) {
        const bar = leagues.slice(0,10);
        return (
            <ul className="league-list">
                {bar.map(
                    (league, it) => {
                        const url = league.code ?  "/league/" + league.code : "/qualification";
                        return <li key={it}  onClick={() => {onCityNameClick(league.code)}}>
                            <Link className="league-link" to={url}>
                            {league.name + it}
                             </Link>
                        </li>
                    }
                )}
            </ul >
        );
    } else {
        return "Подождите идёт загрузка....."
    }

};


export default ListOfLeagues