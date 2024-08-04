import React from "react";
import { useState } from "react";
import PickupForm from "./PickupForm";
import DeliveryForm from "./DeliveryForm";

const DeliveryMainForm = () =>{
  const[showBlockElement, setShowBlockElement] = useState(true)
  const handleClickButton = () => { 
    setShowBlockElement(!showBlockElement)
  }
    return (
      <div className="delivery_form_block">
        <h2 className="title">Authorization</h2>
        <div className="singin_login">
          <span className="login" onClick={showBlockElement ? null : handleClickButton}>Pickup</span>
          <span className="signin" onClick={showBlockElement ?handleClickButton : null}>Delivery</span>
        </div>
      {showBlockElement ? <PickupForm/> : <DeliveryForm/>}
      </div>
    )
};

export default DeliveryMainForm;