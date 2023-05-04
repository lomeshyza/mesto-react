import React from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import PopupWithForm from "./PopupWithForm.jsx";
import ImagePopup from "./ImagePopup.jsx";
import { CurrentUserContext } from "../contexsts/CurrentUserContext";
import { api } from "../utils/Api.js";
import EditProfilePopup from "./EditProfilePopup.jsx";
import EditAvatarPopup from "./EditAvatarPopup.jsx";
import AddPlacePopup from "./AddPlacePopup.jsx";

//import {Routes, Route} from "react-router-dom";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name:'', link:''});
  const [openImagePopup, setOpenImagePopup] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([profileInfo, cards]) => {
        setCurrentUser(profileInfo);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleUpdateUser(data) {
    api
      .updateUserInfo(data)
      .then((value) => {
      setCurrentUser(value);
      closeAllPopups();
    });
  }
  function handleUpdateAvatar(data) {
    api
      .addAvatar(data)
      .then((avatar) => {
        setCurrentUser(avatar);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleUpdatePlace (data){

    api
    .addCard(data)
    .then((newCard)=>{
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
  }
  const handleCardClick = (card) => {
    setOpenImagePopup(!openImagePopup);
    setSelectedCard({name:card.name, link:card.link});
  };
  // ______________________________________открытие попапов__________________________
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    // formProfileValidator.resetValidation ();
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    //formAddValidator.resetValidation();
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    // formEditAvatarValidator.resetValidation();
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setOpenImagePopup(false);
  }
  function handleCardDelete(id) {
    api.deleteCard(id).then(() => {
      const newCards = cards.filter((item) => item._id !== id);
      setCards(newCards);
    });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div>
        <Header />
        <div className="page">
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardDelete={handleCardDelete}
            onCardLike={handleCardLike}
            cards={cards}
          />

          <Footer />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            //isLoading={false}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <AddPlacePopup
             isOpen={isAddPlacePopupOpen}
             onClose={closeAllPopups}
             onAddPlace ={handleUpdatePlace}
          />

          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
            isOpen={openImagePopup}
          />

          <PopupWithForm
            name="confirm"
            title="Вы уверены?"
            buttonText="Да"
            container="confirm"
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
