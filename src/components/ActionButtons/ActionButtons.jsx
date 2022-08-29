import React from 'react';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import "./ActionButtons.css";
import { EditRoadTwoTone } from '@mui/icons-material';


export default function ActionButtons({namberRow, deleteRow, editRow, viewDetails}) {
    const handleClick = () => {
        deleteRow(namberRow);
    }
    const handleEdit = () => {
        editRow(namberRow);
    }
    const handleDetails =() => {
        viewDetails(namberRow);
    }
    return (
        <div>
            <Fab color="success" aria-label="edit" sx={{ width: 40, height: 40, margin: 1}} onClick={handleDetails}>
                <ChromeReaderModeIcon sx={{ width: 20, height: 20}}/>
            </Fab>
            <Fab color="secondary" aria-label="edit" sx={{ width: 40, height: 40, margin: 1}} onClick={handleEdit}>
                <EditIcon sx={{ width: 20, height: 20}}/>
            </Fab>
            <Fab color="error" aria-label="edit" sx={{ width: 40, height: 40, margin: 1}} onClick={handleClick}>
                <DeleteIcon sx={{ width: 20, height: 20}}/>
            </Fab>
        </div>
    )
}
