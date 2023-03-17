import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"
import { Link, NavLink } from "react-router-dom";
export default class Nav extends React.Component {
    constructor( props ) {
        super(  props  );
    
    }

    render() {
        return (
            <div className={style.nav}>
                <div className={style.links}>
                    <div className={style.linkColumn}>
                        <NavLink to="/about" className={style.link}><h3 className={style.h2}> <ion-icon name="alert-circle-outline"></ion-icon>About  </h3></ NavLink>
                    </div>
                    <div className={style.linkColumn}>
                        <Link to="/home" className={style.link}><h3 className={style.h2} ><ion-icon name="home-outline"></ion-icon>Home</h3></ Link>
                    </div>
                </div>
                <div className={style.divSearchBar}>
                <button onClick={() => {
                    const id = Math.floor(Math.random()*826)
                    this.props.onSearch(id)}} className={style.searchRandom}><ion-icon name="search-outline"></ion-icon>Search random</button>
                    <SearchBar onSearch={this.props.onSearch}/>
                </div>
                
            </ div>
        )
    }
}