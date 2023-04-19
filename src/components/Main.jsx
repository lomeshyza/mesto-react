import Card  from './Card.jsx';
import api from "../utils/Api.js";
import React from "react";

function Main({onEditProfile,onEditAvatar,onAddPlace,onCardClick}) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([profileInfo, cards]) => {
          setUserAvatar(profileInfo.avatar);
          setUserName(profileInfo.name);
          setUserDescription(profileInfo.about)
          setCards(cards);
         })
        .catch((err) => {
        console.log(err);
         });
}, []);
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar">
          <div className="profile__image-change">
            <img
              src={userAvatar}
              alt="Аватар"
              className="profile__image"
              onClick={onEditAvatar}
            />
          </div>
          <div className="profile__element">
            <div className="profile__profile-info">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={onEditProfile}
              >
              </button>
            </div>
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__container">
          {cards.map((card) => (
           <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
