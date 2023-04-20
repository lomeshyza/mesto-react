import React from "react";

function PopupWithForm({isOpen, onClose, name, title, buttonText, container, children, popupName}) {
  const className = `popup popup_type_${name} ${
    isOpen ? "popup_opened" : ""
  }`;
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
          type="submit"
        >
          {buttonText}
        </button>

        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        />
      </div>
    </section>
  );
}

export default PopupWithForm;
