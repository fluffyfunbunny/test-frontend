import React from 'react';
import { createRoot } from 'react-dom/client';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
var array = require('./users.json');

const names = [];
for (const property in array) {
  names.push(`${array[property].name}`);
}
names.sort();

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      options={names}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Authors" />}
    />
  );
}
