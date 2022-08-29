import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CreateUser from "./components/CreateUser/CreateUser";
import Modal from "./components/Modal/Modal";

function App() {
  const [modalToggle, setModalToggle] = useState(false);
  const [userName, setUserName] = useState("");
  const [userNameInvalid, setUserNameInvalid] = useState(false);
  const [userSurname, setUserSurname] = useState("");
  const [userSurnameInvalid, setUserSurnameInvalid] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userEmailInvalid, setUserEmailInvalid] = useState(false);
  const [userPhone, setUserPhone] = useState("");
  const [userPhoneInvalid, setUserPhoneInvalid] = useState(false);
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordInvalid, setUserPasswordInvalid] = useState(false);
  const [sendButton, setSendButton] = useState("true");
  const [editButton, setEditButton] = useState("");
  const [editRowIndex, setEditRowIndex] = useState("");
  const [userInfo, setUserinfo] = useState([
    {itemName: "Lilit", itemSurname: "Hovnikyan", itemEmail: "test@gmail.com", itemPhone: "094071814", itemPassword: "4a5sd45as4d5as", itemRating: 2},
    {itemName: "Davit", itemSurname: "Poghosyan", itemEmail: "test@gmail.com", itemPhone: "094071814", itemPassword: "4a5sd45as4d5as", itemRating: 4},
    {itemName: "Levon", itemSurname: "Midoyan", itemEmail: "test@gmail.com", itemPhone: "094071814", itemPassword: "4a5sd45as4d5as", itemRating: 1},
    {itemName: "Gor", itemSurname: "Miqayelyan", itemEmail: "test@gmail.com", itemPhone: "094071814", itemPassword: "4a5sd45as4d5as", itemRating: 0},
    {itemName: "Karen", itemSurname: "Misakyan", itemEmail: "test@gmail.com", itemPhone: "094071814", itemPassword: "4a5sd45as4d5as", itemRating: 5}
  ]);


  const toggleModal = () => {
    setUserName("");
    setUserNameInvalid(false);
    setUserSurname("");
    setUserSurnameInvalid(false);
    setUserEmail("");
    setUserEmailInvalid(false);
    setUserPhone("");
    setUserPhoneInvalid(false);
    setUserPassword("");
    setUserPasswordInvalid(false);
    setModalToggle(!modalToggle);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "userName") {
      if (value.length >= 0) {
        setUserName(value);
        setUserNameInvalid(false);
      } else {
        setUserNameInvalid(true);
      }
    }

    if (name === "userSurname") {
      if (value.length >= 0) {
        setUserSurname(value);
        setUserSurnameInvalid(false);
      } else {
        setUserSurnameInvalid(true);
      }
    }

    if (name === "userEmail") {
      setUserEmail(value);
      let pattern = new RegExp(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
      );
      if (pattern.test(userEmail)) {
        setUserEmailInvalid(false);
      } else {
        setUserEmailInvalid(true);
      }
    }

    if (name === "userPhone") {
      if (value.length > 0) {
        setUserPhone(value);
        setUserPhoneInvalid(false);
      } else {
        setUserPhone("");
        setUserPhoneInvalid(true);
      }
    }
    if (name === "userPassword") {
      setUserPassword(value);
      if (userPassword.length < 8 || userPassword.length > 16) {
        setUserPasswordInvalid(true);
      } else {
        setUserPasswordInvalid(false);
      }
    }
  };

  const checkFormValidation = () => {
    
    if (userName === "") {
      setUserNameInvalid(true);
    }
    if (userSurname === "") {
      setUserSurnameInvalid(true);
    }
    if (userEmail === "") {
      setUserEmailInvalid(true);
    }
    if (userPhone === "") {
      setUserPhoneInvalid(true);
    }
    if (userPassword === "") {
      setUserPasswordInvalid(true);
    }
    if (
      userName !== "" &&
      userSurname !== "" &&
      userEmail !== "" && 
      userPhone !== "" &&
      userPassword !== ""
    ) {
      toggleModal();
      if( sendButton === true && editButton === false ) {
        userInfo.push(
          {
            itemName: userName,
            itemSurname: userSurname, 
            itemEmail: userEmail,
            itemPhone: userPhone,
            itemPassword: userPassword,
            itemRating: true
          })
          setUserinfo(userInfo);
      } else if( sendButton === false && editButton === true ) {
        alert();
      }
    }
  };

  const changeRating = (rating, index) => {
    let newArr = [...userInfo];
    newArr[index].itemRating = rating;
    setUserinfo(newArr);
  }

  const deleteRow = (index) => {
    const newState = [...userInfo];
    newState.splice(index, 1)
    setUserinfo(newState);
  }

  const editRow = (index) => {
    setEditRowIndex(index);
    setEditButton(true);
    setSendButton(false);
    toggleModal();
    setUserName(userInfo[index].itemName);
    setUserSurname(userInfo[index].itemSurname);
    setUserEmail(userInfo[index].itemEmail);
    setUserPhone(userInfo[index].itemPhone);
    setUserPassword(userInfo[index].itemPassword);
  }

  const addNewUser = () => {
    toggleModal();
    setSendButton(true);
    setEditButton(false);
  }

  const saveCheckedForm = () => {
    if(
      userNameInvalid === false &&
      userSurnameInvalid === false && 
      userEmailInvalid === false && 
      userPhoneInvalid === false && 
      userPasswordInvalid === false
      ) {
        toggleModal();
        console.log(editRowIndex);
        let newArr = [...userInfo];
        newArr[editRowIndex].itemName = userName;
        newArr[editRowIndex].userSurname = userSurname;
        newArr[editRowIndex].itemEmail = userEmail;
        newArr[editRowIndex].itemPhone = userPhone;
        newArr[editRowIndex].itemPassword = userPassword;
        setUserinfo(newArr);
    }
  }

  const viewDetails = (index) => {
    console.log(index);
  }

  return (
    <div className="content">
      <Header />
      <Main userInfo={userInfo} changeRating={changeRating} deleteRow={deleteRow} editRow={editRow} viewDetails={viewDetails}/>
      <CreateUser addNewUser={addNewUser}/>
      <Modal
           modal={modalToggle}
           toggleModal={toggleModal}
           userName={userName}
           userNameInvalid={userNameInvalid}
           userSurname={userSurname}
           userSurnameInvalid={userSurnameInvalid}
           userEmail={userEmail}
           userEmailInvalid={userEmailInvalid}
           userPhone={userPhone}
           userPhoneInvalid={userPhoneInvalid}
           userPassword={userPassword}
           userPasswordInvalid={userPasswordInvalid}
           handleChange={handleChange}
           checkFormValidation={checkFormValidation}
           editButton={editButton}
           sendButton={sendButton}
           saveCheckedForm={saveCheckedForm}
      />
    </div>
  );
}

export default App;

