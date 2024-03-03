import React from 'react';
import 'tachyons';

const Card=({id,name,email})=>{

    return (
         <div className='bg-light-red dib br3 pa2 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?150*200`}/>
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;