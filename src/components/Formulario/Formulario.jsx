import { useState } from "react"
import style from "./Formulario.module.css"
import { submitHandler } from "./FuncionesForm";
import validation from "./validation";

/* const validate = (form, errors, setErrors) => {

    if (!form.email) setErrors({ ...errors, email: <ion-icon name="alert-outline" ></ion-icon> })
    else  {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)) setErrors({...errors, email: ""})
        else setErrors({...errors, email: "e-mail invalido"})
    }

    if (!form.password) setErrors({ ...errors, password: <ion-icon name="alert-outline" ></ion-icon> }) 
    else {
        setErrors( { ...errors, password: "" })
    }

} */


const Formulario = (props) => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });


    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })

    
    const handleChange = (event) => {
        const property = event.target.name
        const value = event.target.value
    
        setForm({ ...form, [property]: value })
        validation({...form, [property]: value}, errors, setErrors)
    };


   const submitHandler = (event) => {
    event.preventDefault()
    props.login(form)
   }
    

   


    return (
        <div className={style.divForm}>
            <form className={style.Form} onSubmit={submitHandler} >
            <h2>Iniciar Sesion</h2>
            <div>
                <label htmlFor="email" className={style.labelEmail}>E-mail </label>
                <input 
                type="text" 
                value={form.email} 
                name="email" 
                className={ errors.email ? style.error : style.succes} 
                onChange={handleChange}/>
                <label htmlFor=""> {errors.email}</label> 

            </div>
            <div>    
                <label htmlFor="password" className={style.labelPassword}>Password </label>
                <input 
                type="text" 
                value={form.password} 
                name="password" 
                className={style.inputPassword} 
                onChange={handleChange}/>
                <label htmlFor=""> {errors.password}</label> 
            </div>
            <button type="submit" className={style.buttonLogin}>Login</button>
        </form>
        </div>
        
    )
}

export default Formulario