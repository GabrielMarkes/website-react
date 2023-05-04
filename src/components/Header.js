import React from "react"
import "./Header.css"
import Img from "./imgs/plantar.png"

export default function Header(){
  return(
    <header className="header">
    <img className="logo"  alt="logo" src={Img}></img>
    <ul className="list">
      <a className="link" href="#"><li>Página inicial</li></a>
      <a className="link"  href="#"><li>Projetos</li></a>
      <a className="link"  href="#"><li>Contato</li></a>
    </ul>

    </header>

  )
}

