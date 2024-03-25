import "../Fishes/fishes.css"

const FishCard = ({info, name, region, scientificName, illustrationPhoto}) => {
    return(
    <div className="card">
        <img src={illustrationPhoto.src} alt={illustrationPhoto.alt} />
        <h3>Name: {name}</h3>
        <p>Scientific Name: {scientificName}</p>
        <p>Region: {region}</p>
        <p>Information: {info}</p>
    </div>
    );
};

export default FishCard;