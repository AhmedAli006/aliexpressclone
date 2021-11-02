import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function SelectVariants() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem>Welcome to AliExpress!</MenuItem>
          <MenuItem> <Stack spacing={2} direction="row"><Button style={{backgroundColor:'#ff4747',color:'white'}}>join</Button><Button variant='outlined' style={{backgroundColor:'#ff4747',color:'white'}}>Sign In</Button></Stack></MenuItem>
          <MenuItem >My Orders</MenuItem>
          <MenuItem >Message Center</MenuItem>
          <MenuItem >Wish List</MenuItem>
          <MenuItem >My Favorite Stores</MenuItem>
          <MenuItem >My Coupons</MenuItem>
          
        </Select>
      </FormControl>
      
    </div>
  );
}