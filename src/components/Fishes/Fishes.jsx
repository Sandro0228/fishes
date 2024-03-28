import FishCard from "../FishCard/FishCard";
import "./fishes.css";

const Fishes = ({ fishes }) => {
  const fishClickDone = ({ info, name }) => {
    console.log({ info, name });
  };
  return (
    <div className="fish-wrapper">
      {fishes.map((fish, index) => {
        return (
          <FishCard
            key={index}
            name={fish.name}
            illustrationPhoto={fish.illustrationPhoto}
            region={fish.region}
            info={fish.info}
            scientificName={fish.scientificName}
            fishClicked={({ info, name }) => fishClickDone({ info, name })}
            fishImgClicked={({ illustrationPhoto }) =>
              console.log(illustrationPhoto)
            }
          />
        );
      })}
    </div>
  );
};

export default Fishes;
