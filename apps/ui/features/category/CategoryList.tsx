import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { Box, Container, Paper } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
import CategoryListItem from './CategoryListItem';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  textDecoration: 'none'
}));

const Add = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
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


const CategoryList = (): JSX.Element => {
  const [categories, setCategories] = useState(Array.from([
    {
      name: '1100 words'
    },
    {
      name: '504 words'
    }
  ]))

  const handleAddCategory = (): void => {
    setCategories(oldCategories => [...oldCategories, {
      name: 'New Flashcards'
    }])
  }
  return (
    <Container maxWidth="sm">
      <Grid container sx={{ mt: 4 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 8 }}>
        {categories.map((cat, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <CategoryListItem />
          </Grid>
        ))}
        <Grid xs={2} sm={4} md={4}>
          <Add onClick={handleAddCategory}>
            <AddTwoToneIcon />
          </Add>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CategoryList;