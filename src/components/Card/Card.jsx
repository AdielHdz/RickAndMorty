import React from "react";
import style from "./Card.module.css"
import { NavLink, Link } from "react-router-dom";


export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {id, name, image, species, gender, onClose} = this.props
        console.log(name)
        return(
            
            <div className={style.card}>
                <button onClick={() => onClose(id)} className={style.button}>X</button>
                <img src={image} className={style.img}/>
                
                <Link to={`/detail/${id}`}><h2 className={style.text1}>{name}</h2></ Link>
                <div className={style.h2}>
                <h3 className={style.text}>{species}</h3>
                <h3 className={style.text}>{gender}</h3>
                </div>
                
            </div>

        )
    }
}

