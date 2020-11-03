//import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from '../Template/Header'
import Footer from '../Template/Footer'
import Routes from './Routes'



export default function (props) {
    return (
   
    <BrowserRouter>
        <div className="app">
            <Header />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
    )
}


