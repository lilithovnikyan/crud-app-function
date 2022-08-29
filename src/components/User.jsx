import React from 'react'

import ActionButtons from "../components/ActionButtons/ActionButtons";
import StarRating from './StarRating/StarRating';

export default function User({itemName, itemSurname, itemEmail, itemPhone, itemPassword, changeRating, namberRow, itemRating, deleteRow, editRow, viewDetails}) {
  return (
    <tr>
        <td>{itemName}</td>
        <td>{itemSurname}</td>
        <td>{itemEmail}</td>
        <td>{itemPhone}</td>
        <td>{itemPassword}</td>
        <td>
            <StarRating 
                defaultRating={itemRating}
                changeRating={changeRating} 
                namberRow={namberRow}
            />
        </td>
        <td>
            <ActionButtons namberRow={namberRow} deleteRow={deleteRow} editRow={editRow} viewDetails={viewDetails}/>
        </td>
    </tr>
  )
}
