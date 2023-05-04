import React from "react"
import "./Footer.css"
export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-content">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h3>Contato</h3>
                <p>Telefone: (75) 98313-4741</p>
                <p>Email: gmarques1904@gmail.com</p>
                </div>
            <div className="footer-content">
            <h3>Links Úteis</h3>
            <ul className="list">
                <li><a className="link" href="#">Página Inicial</a></li>
                <li><a className="link" href="#">Sobre Nós</a></li>
                <li><a className="link" href="#">Termos e Condições</a></li>
            </ul>
            </div>
        </footer>
    )
}