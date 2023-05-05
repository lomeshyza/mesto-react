import React, { useContext} from 'react'
import Card from "./Card.jsx";
import { CurrentUserContext } from "../contexsts/CurrentUserContext";

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick, onCardDelete, cards, onCardLike }) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar">
          <div className="profile__image-change">
            <img
              src={currentUser.avatar}
              alt="Аватар"
              className="profile__image"
              onClick={onEditAvatar}
            />
          </div>
          <div className="profile__element">
            <div className="profile__profile-info">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={onEditProfile}
              />
            </div>
            <p className="profile__about">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        />
      </section>
      <section className="cards">
        <ul className="cards__container">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} onCardDelete={onCardDelete} onCardLike={onCardLike}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
