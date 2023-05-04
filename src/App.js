import React  from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./components/App.css"
export default function App(){
    return(
        <div className="all">
        <Header/>
        <Main/>
        <Footer/>
        </div>
    )
}