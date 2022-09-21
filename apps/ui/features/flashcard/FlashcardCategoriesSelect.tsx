import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const FlashcardCategoriesSelect = (): JSX.Element => {
  const [category, setCategory] = React.useState('1');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <FormControl sx={{ mb: 2, minWidth: 130 }} size="small">
      <InputLabel id="demo-select-small">Cards</InputLabel>
      <Select
        labelId="flashcar-categories-select"
        id="flashcar-categories-select"
        value={category}
        label="Category"
        onChange={handleChange}
      >
        <MenuItem value={1}>1100 Words</MenuItem>
        <MenuItem value={2}>504 Words</MenuItem>
        <MenuItem value={3}>Adjectives</MenuItem>
      </Select>
    </FormControl>
  );
}

export default FlashcardCategoriesSelect;