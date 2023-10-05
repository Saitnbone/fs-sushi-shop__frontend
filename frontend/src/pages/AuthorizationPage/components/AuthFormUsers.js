import React from "react";

const AuthFormUsers =()=>{
    return (
      <form className="auth_block_form">
        <h2 className="auth_block_title">Authorization</h2>
        <div className="singin_login">
          <span className="login">Log In</span>
          <span className="signin">Sign In</span>
        </div>
        <div className="auth_block_auth_form">
            <div className="auth_block_name_input">
              <input type="text" placeholder="Name"/>
            </div>
            <div className="auth_block_email_input">
              <input type="text" placeholder="Email address"/>
            </div>
            <div>
              <button type="submit">Subscribe</button>
            </div>
        </div>
      </form>
    )
};

export default AuthFormUsers;
