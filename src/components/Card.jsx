function Card({onCardClick,card}) {
  const handleClick = () => {
    onCardClick(card);
  };
  return (
    <li className="card">
      <button className="card__basket"></button>
      <img
        className="card__image"
        alt={card.name}
        src={card.link}
        onClick={handleClick}
      />
      <div className="card__footer">
        <h2 className="card__location">{card.name}</h2>
        <div className="card__likes-group">
          <button className="card__like-button" type="button"></button>
          <div className="card__like-counter">{card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}
export default Card;
