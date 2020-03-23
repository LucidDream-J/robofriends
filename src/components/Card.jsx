import React from 'react';
import './Card.css'

const Card = ({ name, email, id}) => {
   
    return(
        <div className='Card bg-light-green  br3 grow shadow-5'>
            <img src={`https://robohash.org/${id}`} alt='robot'/>
            <div> <h2> { name}</h2> </div>
            <div> <p> { email}</p> </div>
        </div>
    ); 
}

export default Card;