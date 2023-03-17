import React, { useState } from "react";
import style from "./SearchBar.module.css"


const SearchBar = (props) => {

    const { onSearch } = props;
    const [ id, setId ] = useState("")

    const inputChange = (event) => {
        setId(event.target.value)
    }
    return(
        <>
        <input type="text" name="SearchCharacter" className={style.input} onChange={inputChange} placeholder="¿Que personaje deseas ver?"/>
        <div>
            <button className={style.buttonSearch} onClick={() => onSearch(id)} ><ion-icon name="search-outline"></ion-icon></button>
        </div>
        </>
    )
}

export default SearchBar;