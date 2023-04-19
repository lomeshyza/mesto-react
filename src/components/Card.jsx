function Card(props) {
  const handleClick=() =>{
    props.onCardClick(props.card);
  } 
  return (
    
      <li className="card">
        <button className="card__basket"></button>
        <img className="card__image" alt={props.card.name} src={props.card.link} onClick={handleClick} />
        <div className="card__footer">
          <h2 className="card__location">{props.card.name}</h2>
          <div className="card__likes-group">
            <button className="card__like-button" type="button"></button>
            <div className="card__like-counter">{props.card.likes.length}</div>
          </div>
        </div>
      </li>
  );
}
export default Card;
