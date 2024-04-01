import { useState } from "react";
import "./FishForm.css";

const FishForm = ({ onSubmitFish }) => {
  const [fishForm, setFishForm] = useState({
    id: Math.random(),
    name: "",
    illustrationPhoto: "",
    region: "",
    info: "",
    scientificName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validationForm();
    setFormErrors(errors);

    if (!Object.keys(errors).length) {
      onSubmitFish(fishForm);

      setFishForm({
        id: Math.random(),
        name: "",
        illustrationPhoto: "",
        region: "",
        info: "",
        scientificName: "",
      });
    } else {
      console.log("Form is invalid!");
    }
  };

  const validationForm = () => {
    const errors = {};

    if (fishForm.name.trim() === "") {
      errors.name = "Name is required!";
    }

    if (fishForm.illustrationPhoto.trim() === "") {
      errors.illustrationPhoto = "Img URL is Required!";
    }

    if (fishForm.region.trim() === "") {
      errors.region = "Region is required!";
    }

    if (fishForm.info.trim() === "") {
      errors.info = "Info is required!";
    }

    if (fishForm.scientificName.trim() === "") {
      errors.scientificName = "Scientific name is required!";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFishForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [formErrors, setFormErrors] = useState({});
  return (
    <form onSubmit={handleSubmit} className="create-fish-form">
      <label className="create-fish-form-label">
        Name:
        <input
          type="text"
          name="name"
          value={fishForm.name}
          onChange={handleChange}
          className="create-fish-form-input"
        />
        {formErrors.color && (
          <span className="create-fish-form-error">{formErrors.name}</span>
        )}
      </label>
      <br />
      <label className="create-fish-form-label">
        Img URL:
        <input
          type="text"
          name="illustrationPhoto"
          value={fishForm.illustrationPhoto}
          onChange={handleChange}
          className="create-fish-form-input"
        />
        {formErrors.color && (
          <span className="create-fish-form-error">{formErrors.color}</span>
        )}
      </label>
      <br />
      <label className="create-fish-form-label">
        Region:
        <input
          type="text"
          name="region"
          value={fishForm.region}
          onChange={handleChange}
          className="create-fish-form-input"
        />
        {formErrors.color && (
          <span className="create-fish-form-error">{formErrors.region}</span>
        )}
      </label>
      <br />
      <label className="create-fish-form-label">
        Info:
        <input
          type="text"
          name="info"
          value={fishForm.info}
          onChange={handleChange}
          className="create-fish-form-input"
        />
        {formErrors.color && (
          <span className="create-fish-form-error">{formErrors.info}</span>
        )}
      </label>
      <br />
      <label className="create-fish-form-label">
        Scientific Name:
        <input
          type="text"
          name="scientificName"
          value={fishForm.scientificName}
          onChange={handleChange}
          className="create-fish-form-input"
        />
        {formErrors.color && (
          <span className="create-fish-form-error">
            {formErrors.scientificName}
          </span>
        )}
      </label>
      <br />
      <button type="submit" className="create-fish-form-button">
        Create Fish
      </button>
    </form>
  );
};

export default FishForm;
