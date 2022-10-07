import { Container, Paper } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import CategoryAddButton from './CategoryAddButton';
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

const CategoryList = (): JSX.Element => {
  const categories: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

  return (
    <Container maxWidth="md">
      <Grid container sx={{ mt: 4 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 8, lg: 12 }}>
        {categories.map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <CategoryListItem />
          </Grid>
        ))}
        <Grid xs={2} sm={4} md={4}>
          <CategoryAddButton />
        </Grid>
      </Grid>
    </Container>
  )
}

export default CategoryList;