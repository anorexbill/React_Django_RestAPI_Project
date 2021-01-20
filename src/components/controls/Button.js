import React from 'react';
import {Button as MuiButton, makeStyles} from '@material-ui/core'

export default function Button(props) {

    const useStyles = makeStyles(theme => ({
        root:{
            margin: theme.spacing(0.5)
        },
        label:{
            textTransform: 'none'
        }
    }))

    const {text, size, color, variant, onClick, ...other} = props;
    const classes = useStyles();

    return(
        <MuiButton
            variant={variant || "contained"}
            color={color || "primary"}
            size={size || "large"}
            onClick={onClick}
            {...other}
            classes={{root: classes.root, label:classes.label}}>{text}</MuiButton>
    )
}