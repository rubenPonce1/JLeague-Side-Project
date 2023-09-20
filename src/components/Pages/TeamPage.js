import axios from "axios";
import React, { useEffect, useState } from "react";

const TeamPage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() =>{
    const fetchAllteams = async () =>{
      try{
        const res = await axios.get("http://localhost:8800/teams");
        console.log(res);
      }catch(err){
        console.log(err);
      }
    }
    fetchAllteams();
  }, []);

  return <div>TeamPage</div>;
};

export default TeamPage;
