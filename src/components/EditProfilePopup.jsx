import PopupWithForm from "./PopupWithForm.jsx";
import React from "react";
import { CurrentUserContext } from "../contexsts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser , isLoading}) {
  const currentUser = React.useContext(CurrentUserContext);
  
  const [name, setName] = React.useState({name:""});
  const [description, setDescription] = React.useState({description:""});
  const [textSubmit, setTextSubmit]=React.useState('Сохранить');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }
  function handleChangeName(evt) {
    setName(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    setTextSubmit('Сохранение...');
    onUpdateUser({ name, about: description });
  }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonText={textSubmit}
      popupName="popupProfileForm"
      container="form"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="name-input"
        className="popup__form popup__form_type_name"
        type="text"
        name="popupProfileName"
        minLength="2"
        maxLength="40"
        required
        value={name || ''}
        onChange={handleChangeName}
      />
      <span className="name-input-error popup__message-error"></span>
      <input
        id="about-input"
        className="popup__form popup__form_type_about"
        type="text"
        name="popupProfileAbout"
        minLength="2"
        maxLength="200"
        required
        value={description || ''}
        onChange={handleChangeDescription}
      />
      <span className="about-input-error popup__message-error"></span>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
