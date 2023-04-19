import React from 'react';

function ImagePopup(props){
  const className = `popup popup_type_image ${props.isOpen ? 'popup_opened': ''}`
    return(
<section className={className}>
  <div className="popup__container popup__image-container">
    <button className="popup__close" type="button" onClick={props.onClose}></button>
    <img className="popup__picture" alt={props.card.name} src={props.card.link}/>
    <h2 className="popup__location">{props.card.name}</h2>
  </div>
</section>
    )
}
export default ImagePopup;