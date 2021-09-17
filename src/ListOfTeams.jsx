//Список команд
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import {getListTeams } from "./api.js"
import { Link } from "react-router-dom";
 //Список лиг
const ListOfTeams = () => {
    let [teams, setTeams] = useState([]);
    let [tempText, setTempText] = useState("Идет загрузка.....");
    const codeLeagues = useLocation().pathname.slice(7)
     useEffect(() => {
        getListTeams(codeLeagues)
            .then((data) => {
                console.log(data)
                if (data) {
                    if (data === 403) {
                        setTempText("Для просмотра этой команды нужно оформить подпису..")
                   return  ;
                    }
                    setTeams(data.teams)
                }

            })
    }, [codeLeagues]);
    const onTeamNameClick = (id) => {
        console.log(id)
    }
    console.log(useLocation())
     if (teams.length > 0) {
        const bar = teams.slice(0, 10);
        return (
            <ul className="teams-list">
                {bar.map(
                    (team, it) => {
                        return <li key={it} onClick={() => { onTeamNameClick(team.id) }}>
                            <Link className="teams-link" to={`/teams/${team.name}`}>
                                {team.name + it}
                            </Link>
                        </li>
                    }
                )}
            </ul >
        );
    } else {
        return <h3>{tempText}</h3>
    }

}

export default ListOfTeams;