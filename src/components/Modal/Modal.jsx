import "./Modal.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal">
      {children}
      <button className="closeButton" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default Modal;
