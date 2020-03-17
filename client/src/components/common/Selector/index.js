import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Selector(props) {
  const classes = useStyles();
  const [char, setChar] = useState('');
  //const [characters, setCharaters] = useState([]);
  // const [character, setCharater] = useState({});
  const [open, setOpen] = useState(false);
  //const numbers = props.number
  const characters = props.chars

  const handleChange = event => {
    setChar(event.target.value);
    props.choose(event.target.value);
    console.log(event.target.value)
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl} fullWidth={true}>
        <InputLabel id="demo-controlled-open-select-label">Characters</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={char}
          onChange={handleChange}
        >
          {
            characters
              ? null
              : (<MenuItem value="">
              <em>None</em>
            </MenuItem>)
          }

          {
            characters.map((character) => <MenuItem key={character._id} value={character}> {`${character.name}-${character.type}-${character.stats.level}`} </MenuItem>)
          }
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}