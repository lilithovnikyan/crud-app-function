import React from "react";
import "./CreateUser.css";

function CreateUser({addNewUser}) {
  return (
    <button className="create-user" onClick={addNewUser}>
      Create User
    </button>
  );
}

export default CreateUser;
