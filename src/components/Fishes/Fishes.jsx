import FishCard from "../FishCard/FishCard";
import "./fishes.css";



const Fishes = ({fishes}) => {
    return <div className="fish-wrapper">
        {fishes.map((fish, index) => {
            return(
                <FishCard
                key = {index}
                name = {fish.name}
                illustrationPhoto = {fish.illustrationPhoto}
                region = {fish.region}
                info = {fish.info}
                scientificName = {fish.scientificName}
                />
            )
        })}
    </div>
};

export default Fishes;