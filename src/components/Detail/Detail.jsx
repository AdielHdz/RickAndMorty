import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import style from "./Detail.module.css"
const Detail = () => {

    const { detailId } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY = "f372def1d240.1b10d1ff3c5717b58adb"

        fetch(`${URL_BASE}/character/${detailId}?key=${KEY}`)
        .then(res => res.json())
        .then(data => setCharacter(data))
    }, [])


    
    return (
        <div>
            {
              character.name ?
             ( <>
                <h2>Name: {character.name}</h2>
              <h2>Status: {character.status}</h2>
              <h2>Specie: {character.species}</h2>
              <h2>Gender: {character.gender}</h2>
              <h2>Origin: {character.origin?.name}</h2>
              <img src={character.image} alt="" className={style.img} />
              </>)
            
            : (
                <h2>Loading...</h2>
            )}

       </div>
    )
} 

export default Detail;