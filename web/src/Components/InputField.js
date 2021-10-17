import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/styles';
import {ErrorMessage, useField} from "formik";
import { margin } from '@mui/system';

const useStyles = makeStyles({
    box : {
        width : "100%",
        // border : "1px solid lime",
        margin : "10px 0"
    },
    input:{
        width : "100%"
    },
    small : {
        color : "red",
        fontSize: "10px"
    }
})

export default function InputTextFeild({label ,type , ...props}) {
    const [field , meta] = useField(props)
    
    const classes  = useStyles()
    return (
    <Box
    className={classes.box}
      component="form"
    //   sx={{
    //     '& > :not(style)': { m: 1, width: '25ch' },
    //   }}
      noValidate
      autoComplete="off"
    >
  
      <TextField   type={type} className={classes.input}   {...field} label={label}  variant="standard" />
        <ErrorMessage  className={classes.small} name={field.name} component="small" />
    </Box>
  );
}
