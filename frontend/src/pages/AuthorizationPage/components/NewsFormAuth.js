import React from "react";

const AuthBlockForm =()=> {
  return (
    <form>
      <div className="news_form_auth_block">
        <div className="auth_blok_input_name">
          <input className="auth_block_input_name" type="text" placeholder="Name"/>
        </div>
        <div className="auth_blok_input_email">
          <input className="auth_block_input_email" type="text" placeholder="Email address"/>
        </div>
      </div>
      <button type="submit">Subscribe</button>
    </form>
  );
}

export default AuthBlockForm; 