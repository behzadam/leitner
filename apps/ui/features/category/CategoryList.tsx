import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Paper, Container, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex'
}));

const Add = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
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
  const categories = Array.from(Array(5))
  return (
    <Container maxWidth="sm">
      <Grid container sx={{ mt: 4 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {categories.map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Item>
              <Typography sx={{ ml: 1 }}>Flashcards</Typography>
            </Item>
          </Grid>
        ))}
        <Grid xs={2} sm={4} md={4}>
          <Add>
            <AddTwoToneIcon />
          </Add>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CategoryList;