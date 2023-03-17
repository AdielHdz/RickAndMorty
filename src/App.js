import React, { useEffect } from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import { useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail';

const URL_BASE = "https://be-a-rym.up.railway.app/api";
const KEY = "f372def1d240.1b10d1ff3c5717b58adb"


function App() {

const [characters, setCharacters] = useState([])

const { pathname } = useLocation()


const [acces, setAcces] = useState(false)
const navigate = useNavigate()

useEffect(() => {
  !acces && navigate("/")
}, [acces])

const user = {
  email: "wereber.dragons14@live.com.mx",
  password: "adiel123"
}

const login = (userDate) => {
  if (userDate.email === user.email && userDate.password === user.password) {
    setAcces(true)
    navigate("/home")
  } else {
    alert("Credenciales incorrectas")
  }
}




const onSearch = (id) => {

  if (characters.find(char => char.id === id)) return alert("Este id ya se esta mostrando")


  fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
  .then(res => res.json())
  .then(data => setCharacters([...characters, data]))
}

const onClose = (id) => {
  setCharacters(characters.filter(char => char.id !== id))
}


  return (
    <div className="App">
      { pathname !== "/" && <Nav  onSearch={onSearch} />}
      <Routes>
      <Route path='/' element={<Formulario login={login}/>}/>
      <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
      <Route path="/detail/:detailId" element={<Detail />}/> 
      <Route path="/about" element={<About />}/> 
      </Routes>
      
    
    
    </div>
  );
}

export default App;
