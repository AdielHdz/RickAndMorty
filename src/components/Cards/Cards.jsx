import React from "react";

import Card from "../Card/Card";
import style from "./Cards.module.css"
const Cards = (props) => {
    const { characters, onClose } = props
    console.log(onClose)
    return(
        <>
        <h1>Rick and Morty</h1>
        
        <div className={style.baseCards}>
                {characters.map(({ name, species, gender, image, id }) => <Card name={name} species={species} gender={gender} image={image} onClose={onClose} id={id}/>)}
            </ div>
        </>
    )
}

export default Cards;