import React from 'react';

function PopupWithForm(props){
const className = `popup popup_type_${props.name} ${props.isOpen ? 'popup_opened': ''}`
    return(
        <section className={className}>
        <div className={`popup__container popup__${props.container}-container`}>
        <h3 className="popup__title">{props.title}</h3>
        <form className={`popup__forms popup__${props.name}`}
          name={`${props.popupName}`}
          novalidate>
            {props.children}
        </form >
         
        <button className={`popup__button popup__button_type_${props.name}`} type="submit">
          {props.buttonText}
        </button>

        <button className="popup__close" type="button" onClick={props.onClose}
        ></button>
        </div>
        </section>
    )
}

export default PopupWithForm;