import React, { useState } from "react";
import SignUpFormPage from "../SignUpFormPage";
import Modal from "../Modal";

export const SignUpFormModal = ({ modalToggle }) => {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => setShowModal(false);

  if (modalToggle) {
    setShowModal(true);
  }
  return (
    <>
      <button id="signup-button" onClick={() => setShowModal(true)}>
        SignUp
      </button>
      {showModal && (
        <Modal onClose={onClose}>
          <SignUpFormPage />
        </Modal>
      )}
    </>
  );
};

export default SignUpFormModal;
