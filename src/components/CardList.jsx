import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardsArray = robots.map((item, i) => {

    // if(true){
    //   throw new Error("Noooooooooo")
    // }
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });

  return <div className="grid-container">{cardsArray}</div>;
};

//version 2 syntax

// const CardList = ({robots}) => {
   

//     return (
//         <div className='grid-container'>
//     {
    
//         robots.map((item, i) => {
//             return(
//                 <Card 
//                     key={i} 
//                     id={robots[i].id} 
//                     name={robots[i].name} 
//                     email={robots[i].email}  
//                 />
//             );
//         })
//     }
//         </div>
//     );
//     }

export default CardList;
