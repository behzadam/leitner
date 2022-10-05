import { styled, TextField, TextFieldProps } from '@mui/material';

const Field = styled((props: TextFieldProps) => (
  <TextField {...props} />
))(() => ({
  '.MuiInputBase-root': {
    borderRadius: 0,
    boxShadow: 'none',
    outline: 'none'
  },
  '& fieldset': { border: 'none' }
}));


const FlashcardTextField = ({ ...props }): JSX.Element => {
  return (
    <Field variant="outlined" multiline rows={5} {...props} />
  )
};

export default FlashcardTextField;