import React, { Fragment } from "react";
import "./Modal.css";

function Modal(props) {
  const {
    toggleModal,
    userNameInvalid,
    userName,
    userSurname,
    userSurnameInvalid,
    userEmail,
    userEmailInvalid,
    userPhone,
    userPhoneInvalid,
    userPassword,
    userPasswordInvalid,
    handleChange,
    checkFormValidation,
    saveCheckedForm,
    editButton,
    sendButton
  } = props;
  return (
    <Fragment>
      <div
        id="myModal"
        className={`modal ${props.modal ? "modalOpen" : ""}`}
        onClick={toggleModal}
      >
        <div
          className="modal-content"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <span className="close" onClick={toggleModal}>
            &times;
          </span>
          <div className="modal-item">
            <label>Name</label>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={handleChange}
            />
            {userNameInvalid && (
              <p className="error-message">Name is not valid</p>
            )}
          </div>
          <div className="modal-item">
            <label>Surname</label>
            <input
              type="text"
              name="userSurname"
              value={userSurname}
              onChange={handleChange}
            />
            {userSurnameInvalid && (
              <p className="error-message">Surname is not valid</p>
            )}
          </div>
          <div className="modal-item">
            <label>Email</label>
            <input
              type="email"
              name="userEmail"
              value={userEmail}
              onChange={handleChange}
            />
            {userEmailInvalid && (
              <p className="error-message">Email is not valid</p>
            )}
          </div>
          <div className="modal-item">
            <label>Phone</label>
            <input
              type="number"
              name="userPhone"
              value={userPhone}
              onChange={handleChange}
            />
            {userPhoneInvalid && (
              <p className="error-message">Phone is not valid</p>
            )}
          </div>
          <div className="modal-item">
            <label>Password</label>
            <input
              type="password"
              name="userPassword"
              value={userPassword}
              onChange={handleChange}
            />
            {userPasswordInvalid && (
              <p className="error-message">
                Password is not valid, it should be not less than 8 and not more
                than 16
              </p>
            )}
          </div>
          <div className="send-button">
            <button className="cancel" onClick={toggleModal}>
              Cancel
            </button>
            {sendButton && <button className="send" onClick={checkFormValidation}>
              Send
            </button>}
            {editButton && <button className="save" onClick={saveCheckedForm}>
              Save
            </button>}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Modal;
