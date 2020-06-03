import React, { Fragment } from "react";
import Card from "./Card";


const CardList = (props) => {
    const cardComponent = props.robots.map((user,i) => {
        return (<Card key={i}
            id={props.robots[i].id}
            name={props.robots[i].name}
            email={props.robots[i].email} 
            />);
    });
    return (
        <Fragment>
            {cardComponent}
        
        </Fragment> 
    );
}


export default CardList;
