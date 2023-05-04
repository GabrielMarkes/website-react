import React from "react"
import "./Main.css"
import Img from "./imgs/plantImg.png"
export default function Main(){
    return(
        <main className="container">
            <div className="container2">
                <h1 className="h1primeiro">Lorem ipsum</h1>
                <p className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <h1 className="h1segundo">Benefícios</h1>   
           </div>
        <div className="container3">
        <p className="p2">1.<strong>Centrary to popular belief</strong>, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
        <p className="p2">2.<strong>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"</strong> (The Extremes of Good and Evil) by Cicero.</p>
        <p className="p2">3.<strong>There are many variations of passages of Lorem Ipsum available</strong>, but the majority have suffered alteration in some form, by injected humour.</p> 
        
        <img className="img" src={Img}></img>
        </div>
        </main>
    )
}