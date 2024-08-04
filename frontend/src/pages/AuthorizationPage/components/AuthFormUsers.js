/*



*/

import React, { useState } from "react";
import RegNewUser from "./RegNewUser";
import LoginUsers from "./LoginUsers";

const AuthFormUsers =()=>{
  const [showLoginForm, setShowLoginForm] = useState(true)
    const handelClickButton= () =>{
        setShowLoginForm(!showLoginForm)
    }
    /* 
    Скрипт отрисовывает по умолчанию компонент логина т.к значение true. При нажатии значение на кнопку
    функция onclick обрабатывает нажатие и заменяет значение на false, следовательно, отрисовывается другой 
    компонент. 

    onClick={showLoginForm ? null : handelClickButton}  кнопка "Log In" будет неактивной, когда showLoginForm 
    равно true, и активной, когда showLoginForm равно false.
    */
    return (
      <form className="auth_block_form">
        <h2 className="auth_block_title">Authorization</h2>
        <div className="singin_login">
          <span className="login" onClick={showLoginForm ? null : handelClickButton}>Log In</span>
          <span className="signin" onClick={showLoginForm ?handelClickButton : null}>Sign Up</span>
        </div>
        <div>
        {showLoginForm ? <LoginUsers />: <RegNewUser/>}
        </div>
      </form>
    )
};

export default AuthFormUsers;
