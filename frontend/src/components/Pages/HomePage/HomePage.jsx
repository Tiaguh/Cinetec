import React from 'react'
import {Link} from 'react-router-dom'
import banner from './img/banner.png'
import './HomePage.css'

export default function HomePageContent() {
    return (
        <div className="home-page-container">

            <img className='img' src={banner} alt="" />

            <div className="home-page-header">

                <div className="home-page-title">
                    <h1>Cinetec</h1>
                </div>

                <div className="home-page-items">
                    <Link className='link' to="/login">
                        <p>Login</p>
                    </Link>

                    <Link className='link' to="/cadastro">
                        <p>Criar Conta</p>
                    </Link>

                </div>

            </div>

            <div className="home-page-slogan">
                <h3>Filmes, séries e muito mais.</h3>
            </div>
        </div>
    )
}