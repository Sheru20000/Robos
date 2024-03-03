import React from "react";
import Card from "./card";

const cardList =({robots}) =>{
    
    const robos=robots.map((user,i)=>{
        return <Card id={robots[i].id} name={robots[i].name} 
        username={robots[i].username} email={robots[i].email} /> 
    })
  return(
    <div>
         {robos}
    </div>
  )
}

export default cardList;