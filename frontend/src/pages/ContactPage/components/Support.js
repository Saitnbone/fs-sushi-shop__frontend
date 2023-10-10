import React from "react";
import { MdOutlineSupportAgent } from 'react-icons/md'
import {HiOutlineMail} from 'react-icons/hi'
import {VscHubot} from 'react-icons/vsc'

const SupportBlock = () =>{
    return (
        <div className="contact_support_block">
            <div>
                <span className="contact_block_icon_support"><MdOutlineSupportAgent /></span>
            </div>
            <div className="contact_block_support_information">
                <p className="contact_block_message">
                    Dear customer, if you have any questions or suggestions regarding the quality of products 
                    or suggestions for improving service and maintenance, as well as questions related to delivery, 
                    please leave feedback to our email or via telegram bot.
                </p>
                <div className="contact_block_email">
                    <span><HiOutlineMail /></span><p>Email: ju-sushishop@gmail.com</p>
                </div>
                <div className="contact_block_tg_bot">
                    <span><VscHubot /></span><p>telegram-bot: </p>
                </div>
            </div>
        </div>
    )
};

export default SupportBlock;