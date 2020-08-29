import React from 'react';
// **Save for pictures of robots later** import logo from './logo.svg';
import './Card.css';

const Card = (props) => {
    return (
      <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${props.id}?200x200`} alt='Robofriend'/>
        <div>
          <h2>{props.name}</h2>
          <p>{props.email}</p>
        </div>
      </div>
    );
}

export default Card;