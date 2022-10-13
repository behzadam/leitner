import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import CategoryAddButton from './CategoryAddButton';
import CategoryListItem from './CategoryListItem';

const CategoryList = (): JSX.Element => {
  const categories: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

  return (
    <Container maxWidth="md" sx={{ paddingBottom: 11 }}>
      <Grid container sx={{ mt: 4 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 8, lg: 12 }}>
        {categories.map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <CategoryListItem />
          </Grid>
        ))}
        <CategoryAddButton />
      </Grid>
    </Container>
  )
}

export default CategoryList;