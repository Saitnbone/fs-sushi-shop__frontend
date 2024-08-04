import React, { useState } from 'react'
import DeliveryMainForm from './DeliveryMainForm';

export const BasketBlockElement = () => {
  const [showDeliveryBlock, setShowDeliveryBlock] = useState(false)
  const handleClickButton = () => {
    setShowDeliveryBlock(!showDeliveryBlock)
  }
  return (
    <>
      <div className="basket_block_element">
        <h2 className="title">Shopping Cart</h2>
        <div className='basket_block_with_items'>
          <p>Your basket is empty right now :</p>
        </div>
        <div className='go_to_delivery'>
          <button type='submit' onClick={handleClickButton}>Go to delivery</button>
        </div>
      </div>
        {showDeliveryBlock ? <DeliveryMainForm/> : null}
    </>
  )
};

export default BasketBlockElement;