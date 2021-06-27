import { useState } from "react";
import LoginForm from "./LoginForm";
import Modal from "../Modal";

export const LoginFormModal = ({modalToggle}) => {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => setShowModal(false)

  if(modalToggle){
    setShowModal(true)
  }
  return (
    <>
      <button id='login-button' onClick={() => setShowModal(true)}>Login</button>
      {showModal && (
        <Modal onClose={onClose}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
};

export default LoginFormModal;
