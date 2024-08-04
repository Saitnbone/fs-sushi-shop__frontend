import React from 'react'

export const RegNewUser = () => {
  return (
    <div className="auth_block_auth_form">
      <div className="auth_block_name_input">
        <input type="text" placeholder="Name"/>
      </div>
      <div className="auth_block_email_reg_input">
        <input type="text" placeholder="Email address"/>
      </div>
      <div className="auth_block_email_input">
        <input type="number" placeholder="Password"/>
      </div>
      <div>
        <button type="submit">Sing up</button>
      </div>
    </div>
  )
};

export default RegNewUser;
