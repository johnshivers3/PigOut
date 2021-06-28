import "./HotCard.css";

export const HotCard = ({ business }) => {
  return (
    <div className="suggestions-cards">
      {/* <div className="suggestions-cards-top">
        <h3>{business.name}</h3>
      </div>
      <div className="card-content">
        <img
          alt="thumb"
          src={business.image_url}
          height="200px"
          width="200px"
        ></img>
        <div className="card-content-info">
          <div className="card-content-info-div">
            <p>Rating: </p>
            <p>{business.rating}</p>
          </div>
          <div className="card-content-info-div">
            <p>Price:</p>
            <p>{business.price}</p>
          </div>
          <div className="card-content-info-div location">
            <p>Location: </p>
            <p>{business.location.display_address}</p>
          </div>
          <div className="card-content-info-div">
            <p></p>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default HotCard;
