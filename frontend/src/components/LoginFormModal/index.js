import { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import Modal from "../Modal";
import { useDispatch } from "react-redux";

import * as sessionActions from "../../store/session";

export const LoginFormModal = ({ modalToggle }) => {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const onClose = () => setShowModal(false);

  const loginDemo = () => {
    history.push("/");
    const credential = "Demo-lition";
    const password = "password";
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        return history.push("/");
      }
    );
  };

  if (modalToggle) {
    setShowModal(true);
  }
  return (
    <>
      <div>
        <button id="demo-button" onClick={loginDemo}>
          Demo
        </button>
      </div>
      <div>
        <button id="login-button" onClick={() => setShowModal(true)}>
          Login
        </button>
      </div>
      {showModal && (
        <Modal onClose={onClose}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
};

export default LoginFormModal;
