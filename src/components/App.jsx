import React from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import PopupWithForm from "./PopupWithForm.jsx";
import ImagePopup from "./ImagePopup.jsx";

function App() {
  
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [openImagePopup, setOpenImagePopup] = React.useState(false);

const handleCardClick =(card) =>{
  setOpenImagePopup(!openImagePopup);
  setSelectedCard(card)
  console.log(selectedCard);

} 
  function handleEditProfileClick() {
    setisEditProfilePopupOpen(!isEditProfilePopupOpen);
    // formProfileValidator.resetValidation ();
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(!isAddPlacePopupOpen);
    //formAddValidator.resetValidation();
  }
  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    // formEditAvatarValidator.resetValidation();
  }
  
  function closeAllPopups() {
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setOpenImagePopup(false);
  }

  return (
    <div>
      <Header />
      <div className="page">
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick = {handleCardClick}
        />
            
        <Footer />

        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          buttonText="Сохранить"
          popupName="popupProfileForm"
          container="form"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="name-input"
            className="popup__form popup__form_type_name"
            type="text"
            name="popupProfileName"
            minLength="2"
            maxLength="40"
            required
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
          />
          <span className="about-input-error popup__message-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="add"
          title="Новое место"
          buttonText="Создать"
          popupName="popupPlaceForm"
          container="form"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="place-input"
            className="popup__form popup__form_type_place"
            type="text"
            name="popupPlace"
            minLength="2"
            maxLength="30"
            placeholder="Название"
            required
          />
          <span className="place-input-error popup__message-error"></span>
          <input
            id="link-input"
            className="popup__form popup__form_type_image"
            type="url"
            name="popupPlaceLink"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="link-input-error popup__message-error"></span>
        </PopupWithForm>

        <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
        isOpen={openImagePopup}>
        </ImagePopup>

        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          buttonText="Да"
          container="confirm"
        ></PopupWithForm>

        <PopupWithForm
          name="update"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
          popupName="popupUpdateProfileForm"
          container="update"
        >
          <input
            id="avatar-input"
            className="popup__form popup__form_type_update"
            type="url"
            name="popupUpdateProfile"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="avatar-input-error popup__message-error"></span>
        </PopupWithForm>

      </div>
    </div>
  );
}

export default App;
