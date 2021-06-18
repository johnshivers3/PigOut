import { useState } from "react";
import LoginForm from "./LoginForm";
import Modal from "../Modal";

export const LoginFormModal = () => {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => setShowModal(false)
  return (
    <>
      <button onClick={() => setShowModal(true)}>Login</button>
      {showModal && (
        <Modal onClose={onClose}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
};

export default LoginFormModal;
