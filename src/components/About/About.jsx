
import style from "./About.module.css"
const About = () => {
    return (
        <div>
            <h1>About Rick and Morty</h1>
            <p className={style.parrafo}>Hola soy <span><b>Adiel Luciano Hernandez Ortegon</b></span> les comparto este pequeño proyecto donde implemento todos mis conocimientos <b>(HTML, CSS, JAVASCRIPT y hasta el momento REACT)</b>obtenidos durante el curso de HENRY</p>
            <img src="https://fondosmil.com/fondo/27347.jpg" className={style.img}/>
            <img src="https://www.todofondos.net/wp-content/uploads/30-fondos-de-pantalla-4k-ultra-hd-de-rick-and-morty-imagenes-de-fondo.-imagen-hd-1080p-de-rick-y-morty.png" className={style.img}/>
        </div>
        
        
    )
}

export default About;