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
    const credential = process.env.REACT_APP_DEMO_USER;
    const password = process.env.REACT_APP_DEMO_PASSWORD;
    return dispatch(sessionActions.login({ credential, password })).catch(
       () => {
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
