import { useEffect, useState } from "react";
import FishCard from "../FishCard/FishCard";
import "./fishes.css";
import Modal from "../Modal/Modal";
import FishForm from "../FishForm/FishForm";

const Fishes = ({ fishes: initialFishes }) => {
  const [createFish, setCreateFish] = useState(false);
  const [fishes, setFishes] = useState(initialFishes);
  const fishClickDone = ({ info, name }) => {
    console.log({ info, name });
  };

  const handleFishSubmit = (fish) => {
    if (fish) {
      setFishes((prevFish) => {
        return [...prevFish, fish];
      });
      setCreateFish(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("Fish list changed!");
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [fishes]);

  return (
    <div className="fish-wrapper">
      <button onClick={() => setCreateFish(true)}>Create Fish</button>
      {createFish && (
        <Modal onClose={() => setCreateFish(false)}>
          <FishForm onSubmitFish={handleFishSubmit}></FishForm>
        </Modal>
      )}
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
    </div>
  );
};

export default Fishes;
