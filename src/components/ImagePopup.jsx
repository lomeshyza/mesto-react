import React, { useEffect } from 'react';

function ImagePopup({isOpen, onClose, card}) {
  const className = `popup popup_type_image ${
    isOpen ? "popup_opened" : ""
  }`;
  useEffect(()=>{
    if(!isOpen)return;
    const closeByEsc =(evt)=>{
      if (evt.key === 'Escape') {
        onClose();
    }} 

    document.addEventListener('keydown', closeByEsc);
    return()=>document.removeEventListener('keydown', closeByEsc);
  },[isOpen, onClose]) 
  return (
    <section className={className}>
      <div className="popup__container popup__image-container">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        <img
          className="popup__picture"
          alt={card.name}
          src={card.link}
        />
        <h2 className="popup__location">{card.name}</h2>
      </div>
    </section>
  );
}
export default ImagePopup;
