import { useState } from "react";
import SignUpFormPage from "../SignUpFormPage";
import Modal from "../Modal";

export const SignUpFormModal = () => {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => setShowModal(false)
  return (
    <>
      <button onClick={() => setShowModal(true)}>SignUp</button>
      {showModal && (
        <Modal onClose={onClose}>
          <SignUpFormPage />
        </Modal>
      )}
    </>
  );
};

export default SignUpFormModal;
