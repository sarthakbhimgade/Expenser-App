import React from "react";
import Modal from "react-modal";
import "./success-modal.css";
import { Link } from "react-router-dom";
import ADDEDIMAGE from '../../assests/images/added-image.png';

const SuccessModal = ({modalOpen, setModalOpen}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#ffc5e2",
      borderRadius: "12px",
    },
  };
  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <div className="modal-inner">
        <label>Expense Added Successfully</label>
        <img
          src={ADDEDIMAGE}
          alt="Expense Added"
          className="added-image"
        />
        <Link to="/">
          <div className="take-home-button">
            <i className="fi-rr-home">Home</i>
          </div>
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessModal;
