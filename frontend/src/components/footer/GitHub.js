// Компонент для перехода на сайт гитхаба
import React from "react";
import {AiOutlineGithub} from "react-icons/ai"

const Github = () =>{
    return <AiOutlineGithub onClick={() =>window.open("https://twitter.com")} className="github_icon"/>
}

export default Github;