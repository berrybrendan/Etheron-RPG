import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function MultilineTextFields(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');
const TextFieldLabel = props.constTextFieldLabel
  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>

        <TextField
          id="outlined-multiline-static"
          label={TextFieldLabel}
          multiline
          rows="10"
          //defaultValue="Default Value"
          variant="outlined"
          onChange={e => props.setFeed(e.target.value)}
        />
</div>
    </form>
  );
}