import { useState, useEffect } from "react";
import CheckOut from "./CheckOut";
import CheckoutSuccess from './CheckoutSuccess'
import './Modal.css'

/* eslint-disable react/prop-types */


const Modal = ({isOpen, onClose}) => {

  const [switchModal, setSwitchModal] = useState(true)

  useEffect(() => {
    document.body.classList.toggle('noscroll', isOpen)
  }, [isOpen])

  if (isOpen) {
    return (
      <div className="backdrop">
        <div>
          {switchModal && <CheckOut setSwitchModal={setSwitchModal} onClose={onClose}/>}
          
          {!switchModal && <CheckoutSuccess onClose={onClose} />}
        </div>
      </div>
    )
  }
  return null
}

export default Modal