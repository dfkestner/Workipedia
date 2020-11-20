// take in props for search value
// can bring into table, and set a hook with handleInputChange
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!search) {
      return;
    }
  }, [search]);

  const handleInputChange = event => {
      setSearch(event.target.value);
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Search for an Employee" variant="outlined" value={search} name="search" handleInputChange={handleInputChange} />
    </form>
  );
}