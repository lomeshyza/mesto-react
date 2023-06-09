import PopupWithForm from "./PopupWithForm.jsx";
import React, { useState, useEffect, useRef } from 'react';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef({});
  const [textSubmit, setTextSubmit]=useState('');

  useEffect(() => {
    setTimeout(()=>setTextSubmit('Сохранить'), 1000)   
  }, [isOpen]);

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    setTextSubmit('Сохранение...');
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="update"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      buttonText={textSubmit}
      popupName="popupUpdateProfileForm"
      container="update"
      onSubmit={handleSubmit}
    >
      <input
        id="avatar-input"
        className="popup__form popup__form_type_update"
        type="url"
        name="popupUpdateProfile"
        placeholder="Ссылка на картинку"
        required
        ref={avatarRef}
      />
      <span className="avatar-input-error popup__message-error"></span>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
