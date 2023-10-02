import React from "react";
import './auth.css'
import { useState } from "react";
import {AiOutlineMenu} from 'react-icons/ai'

const AuthorizationPage = () => { 
    return (
    <div className="auth_block">
        <header className="heaader_auth_block">
        <div className="navbar"></div>
        </header>
        <main className="main_auth_block">
        <form>
      <div className="news_form">
        <div className="blok_input_name">
          <input className="input_name" type="text" placeholder="Name"/>
        </div>
        <div className="blok_input_email">
          <input className="input_email" type="text" placeholder="Email address"/>
        </div>
      </div>
      <button type="submit">Subscribe</button>
    </form>
        </main>
        <footer className="footer_auth_block"></footer>
        </div>
    )
}

export default AuthorizationPage;