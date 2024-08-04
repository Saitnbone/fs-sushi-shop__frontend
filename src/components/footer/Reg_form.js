import React from "react";

const MyForm =()=> {
  return (
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
  );
}

export default MyForm;
