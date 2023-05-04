import React from "react";
import { CurrentUserContext } from '../contexsts/CurrentUserContext';

function Card({onCardClick,card,onCardDelete, onCardLike}) {
  
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `card__like-button ${isLiked && 'card__like-button_active'}` 
  );
  const handleClick = () => {
    onCardClick(card);
  };
  function handleDeleteClick () {
    onCardDelete(card._id)
  };
  function handleLikeClick (){
    onCardLike(card)
  }
  return (
 
    <li className="card">
      {isOwn && <button className="card__basket" type="button" onClick={handleDeleteClick}/>}
      
      <img
        className="card__image"
        alt={card.name}
        src={card.link}
        onClick={handleClick}
      />
      <div className="card__footer">
        <h2 className="card__location">{card.name}</h2>
        <div className="card__likes-group">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
          <div className="card__like-counter">{card.likes.length}</div>
        </div>
      </div>
    </li>

  );
}
export default Card;
