import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Paper, Container, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useState } from 'react';
import Link from 'next/link';

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
      <Grid container sx={{ mt: 4 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {categories.map((cat, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Link href="/flashcards">
              <a>
                <Item>
                  <Typography variant="body2" sx={{ ml: 1 }}>{cat.name}</Typography>
                </Item>
              </a>
            </Link>
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