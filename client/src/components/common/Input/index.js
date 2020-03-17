import React from 'react';
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
  const classes = useStyles();
const labelContent = props.labelContent
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="filled-basic" label={labelContent} variant="filled" />
    </form>
  );
}