import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, List, ListItem, ListItemText, ListItemAvatar, ListItemIcon, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import './css/card.css'
import axios from 'axios';

function Card({ids, incomeType, note, amount }) {
    const clickHandler=(e)=>{
        axios.delete(`http://localhost:3001/data/delOne/${e.currentTarget.name}`);
    }
    const useStyles = makeStyles((theme) => ({
        white: {
          backgroundColor: '#ffffff',
          border:'1px solid black'
        },
      }));
      const classes=useStyles();
    return (
        <div >
            <List>
                <ListItem>
                    <ListItemAvatar  >
                        <Avatar   className={classes.white}>
                            {incomeType=='income' ? <AddIcon color='primary' fontSize='large' /> : <RemoveIcon fontSize='large' color='error' />}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={note} />
                    <span>{amount} Re.</span>
                    <ListItemIcon >
                        
                        <IconButton  onClick={clickHandler} name={ids}><DeleteIcon  /></IconButton>
                    </ListItemIcon>
                </ListItem>

            </List>
        </div>
    )
}

export default Card
