

const validation = (form, errors, setErrors) => { 
    if (!form.email)
    setErrors( { ...errors, email: "campo vacio" } )

    else if (form.email.length > 35)
    setErrors( { ...errors, email: "no puedes poner mas de 35 caracteres" } )

    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)) {
    setErrors( { ...errors, email: "email invalido" } )
    }

    else setErrors({ ...errors, email: "" })

    if (form.password.length < 6 && form.password.length > 10) {
        setErrors({...errors, password: "longitud de caracteres invalida"}) 
    } else if (!/\d/.test(form.password)) {
        setErrors({ ...errors, password: "debe contener al menos un numero" })
    } else {
        setErrors( { ...errors, password: "" } )
    }
}

export default validation