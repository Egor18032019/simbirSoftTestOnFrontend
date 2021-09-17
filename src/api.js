 const ServerUrl = {
   LISTOFLEAGUES: `https://api.football-data.org/v2/competitions`,
   LISTOFTEAMS: "https://api.football-data.org/v2/competitions/WC/teams",
   CALENDARLEAGUE: "https://api.football-data.org/v2/competitions/WC/matches",
   CALENDAROFONETEAM: "https://api.football-data.org/v2/teams/",
 };
//  http://api.football-data.org/v2/competitions/2000/matches?matchday=1

 const Method = {
   GET: `GET`,
   PUT: `PUT`,
 };



 let getListLeagues =async () => {
   console.log("getListLeagues")
   return await _loadData({
     url: ServerUrl.LISTOFLEAGUES
   }).then(res => res.json())
   
 }

 const getListTeams = async (league) => {
   return await _loadData({
       url: ServerUrl.LISTOFLEAGUES + league + "/teams"
     })
     .then((response) => {
       if (response) {
         if (response === 403) {
           return response
         }
         return response.json()
       }
     })
 }

 const getLeagueCalendar = async () => {
   const response = await _loadData({
     url: ServerUrl.CALENDARLEAGUE
   });
   return response.json();
 }

 const getTeamCalendar = async () => {
   const response = await _loadData({
     url: ServerUrl.CALENDAROFONETEAM
   });
   return response.json();
 }

 let _loadData = async ({
   url,
   method = Method.GET,
   body = null,
   headers = new Headers()
 }) => {
   //TODO исправить
   headers.append(`X-Auth-Token`, "26fa006c317c4e47a1b5d8dec35e4503");
   // headers.append(`Content-Type`, `application/json`);


   return await fetch(url, {
       method,
       body,
       headers
     })
     .then(_checkStatus)
     .catch((error) => {
       throw error;
     });



 }


 const _checkStatus = (response) => {
   if (response.status >= 200 && response.status < 300) {
     return response;
   } else {
     return response.status
    //  throw new Error(`${response.status}: ${response.statusText}`);
   }
 }

 export {
   getTeamCalendar,
   getLeagueCalendar,
   getListTeams,
   getListLeagues,
 }