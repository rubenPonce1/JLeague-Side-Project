import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Styles/TeamPage.css"

const TeamPage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() =>{
    const fetchAllteams = async () =>{
      try{
        const res = await axios.get("http://localhost:8800/teams");
        setTeams(res.data)
      }catch(err){
        console.log(err);
      }
    }
    fetchAllteams();
  }, []);

  return( 
    <div className="TeamPage">
      <h1>Testing Team Page </h1>
      <div className="teams">
        {teams.map((team)=>(
          <div className="team" key={team.id}>
            {team.teamImg && <img className="teamImg" src={team.teamImg} alt = ""/>}
            <h2>{team.TeamName}</h2>
            <p>{team.teamInfo}</p>

          </div>
        ))};
        

      </div>
    </div>);
};

export default TeamPage;
