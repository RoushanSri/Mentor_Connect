import React from "react"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import Intro from "./Components/Intro/Intro"
import Form from "./Components/Form/Form"
import { BrowserRouter as Router } from "react-router-dom"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Intro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/register" element={<Form/>}/>
    </Routes>
    </>
  )
}

export default App;
