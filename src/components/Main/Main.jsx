import React, { Fragment } from "react";
import "./Main.css";
import User from "../User";

function Main(props) {
  const { userInfo, changeRating, deleteRow, editRow, viewDetails } = props;
  return (
    <Fragment>
      <table id="customers">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((item, i)=> {
            return (    
              <User {...item} namberRow={i} changeRating={changeRating} deleteRow={deleteRow} editRow={editRow} viewDetails={viewDetails} key={i}/>    
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
}

export default Main;
