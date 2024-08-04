import React from 'react'


export const LoginUsers = () => {
  return (
    <div className="auth_block_auth_form">
            <div className="auth_block_name_input">
              <input type="text" placeholder="Name"/>
            </div>
            <div className="auth_block_email_input">
              <input type="text" placeholder="Email address"/>
            </div>
            <div>
              <button type="submit">Authorize</button>
            </div>
    </div>
  )
};

export default LoginUsers;
