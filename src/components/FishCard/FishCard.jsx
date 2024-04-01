import { useState } from "react";
import Modal from "../Modal/Modal";
import "./FishCard.css";

const FishCard = ({
  info,
  name,
  region,
  scientificName,
  illustrationPhoto,
  fishClicked,
  fishImgClicked,
}) => {
  const [isShowing, setIsShowing] = useState(false);
  const [stars, setStars] = useState(0);

  const handleClick = () => {
    fishClicked({ info, name });
  };

  const handleImgClicked = () => {
    fishImgClicked({ illustrationPhoto });
  };

  const showFish = () => {
    setIsShowing(true);
  };

  const handleLikeClicked = () => {
    setStars((prevStar) => prevStar + 1);
  };

  const handleUnlikeClicked = () => {
    setStars((prevStar) => prevStar - 1);
  };

  const renderStars = () => {
    let starIcon = "";

    if (stars > 20) {
      starIcon += "⭐⭐⭐⭐⭐ Excellent  ";
    } else if (stars > 15) {
      starIcon += "⭐⭐⭐⭐ Good  ";
    } else if (stars > 10) {
      starIcon += "⭐⭐⭐ Normal  ";
    } else if (stars > 5) {
      starIcon += "⭐⭐ Bad  ";
    } else {
      starIcon += "⭐ Very Bad  ";
    }

    return starIcon;
  };

  return (
    <>
      <div className="card" onClick={() => handleClick()}>
        <img
          src={illustrationPhoto.src}
          alt={illustrationPhoto.alt}
          onClick={() => handleImgClicked()}
        />
        <h3>{name}</h3>
        <p>Scientific Name: {scientificName}</p>
        <p>Region: {region}</p>
        <p>Information: {info}</p>
        <button className="show-button" onClick={() => showFish()}>
          Show
        </button>
      </div>
      {isShowing && (
        <Modal onClose={() => setIsShowing(false)}>
          <img src={illustrationPhoto.src} alt={illustrationPhoto.alt} />
          <span>
            Rating: {renderStars()}
            <h4>Likes: {stars}</h4>
            <button
              className="like-button"
              onClick={() => {
                handleLikeClicked();
              }}
            >
              👍
            </button>
            <button
              className="unlike-button"
              onClick={() => handleUnlikeClicked()}
            >
              👎
            </button>
          </span>
        </Modal>
      )}
    </>
  );
};

export default FishCard;
