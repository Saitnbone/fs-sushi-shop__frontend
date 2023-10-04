// Компонент для перехода в инстаграм
import React from "react"
import {AiOutlineInstagram} from "react-icons/ai"

const Instagram = () =>{
    return <AiOutlineInstagram onClick={()=> window.open("https://www.instagram.com")}/>
}
export default Instagram;