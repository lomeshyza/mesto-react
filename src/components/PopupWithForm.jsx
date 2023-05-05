import React, { useEffect } from 'react';

function PopupWithForm({
  isOpen,
  onClose,
  onSubmit,
  name,
  title,
  buttonText,
  container,
  children,
  popupName,
}) {
  useEffect(()=>{
    if(!isOpen)return;
   
    const closeByEsc =(evt)=>{
      if (evt.key === 'Escape') {
        onClose();
    }} 

    document.addEventListener('keydown', closeByEsc);
    return()=>document.removeEventListener('keydown', closeByEsc);
  },[isOpen, onClose])

  const className = `popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`;
  
  return (
    <section className={className}>
      <div className={`popup__container popup__${container}-container`}>
        <h3 className="popup__title">{title}</h3>
        <form
          className={`popup__forms popup__${name}`}
          name={`${popupName}`}
        >
          {children}
        </form>

        <button
          className={`popup__button popup__button_type_${name}`}
          onClick={onSubmit}
          type='submit'
        >
          {buttonText}
        </button>

        <button className="popup__close" type="button" onClick={onClose} />
      </div>
    </section>
  );
}

export default PopupWithForm;
