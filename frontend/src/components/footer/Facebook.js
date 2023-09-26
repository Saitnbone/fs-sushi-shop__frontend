import React from "react";
import {AiFillFacebook} from "react-icons/ai"

const Facebook = () => {
    return <AiFillFacebook onClick={()=>window.open("https://www.facebook.com/")} className="facebook_icon"/>
}

export default Facebook;