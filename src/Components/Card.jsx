import React, { Fragment } from 'react';

const Card = ({id, name , email }) => {
    
    return (
        <Fragment>
        <div className="tc dib br4 ma3 grow bw2 shadow-5" style ={{backgroundColor:"#90e0ef"}}>
            <img src={`https://robohash.org/${id}?200x200`} alt="robohash"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        </Fragment>
    );
}

export default Card;