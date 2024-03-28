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

  const handleStarClicked = () => {
    setStars((prevStar) => prevStar + 1);
  };

  const renderStars = () => {
    let starIcon = "";

    for (let i = 0; i < stars; i++) {
      starIcon += "⭐";
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
        <h3>Name: {name}</h3>
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
            Stars: {renderStars()} {stars}
            <button
              className="like-button"
              onClick={() => {
                handleStarClicked();
              }}
            >
              👍
            </button>
          </span>
        </Modal>
      )}
    </>
  );
};

export default FishCard;
