import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function BasicTextFields(props) {
  const [value, setValue] = useState('');
  const handleChange = event => {
    setValue(event.target.value);
    props.setAdminPass(event.target.value)
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   props.setAdminPass(value);
  // };


  const classes = useStyles();
const labelContent = props.labelContent
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="filled-basic" label={labelContent} variant="filled" onChange={(e) => handleChange(e)}  />
    </form>
  );
}