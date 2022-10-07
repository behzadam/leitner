import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  width: '100%',
  padding: theme.spacing(1.7),
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  borderRadius: '5px',
  borderWidth: '1px',
  borderStyle: 'dashed',
  borderColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ddd',
  cursor: 'pointer'
}));

const CategoryAddButton = (): JSX.Element => {

  const handleAddCategory = (): void => {
    console.log("handleAddCategory")
  }

  return (
    <StyledButton onClick={handleAddCategory}>
      <AddTwoToneIcon />
    </StyledButton>
  )
}

export default CategoryAddButton;