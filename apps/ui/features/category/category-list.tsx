import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useMemo } from 'react';

import CategoryListAddButton from './category-add';
import CategoryListItem from './category-list-item';

const CategoryList = (): JSX.Element => {
  const categories: number[] = useMemo(() => {
    return Array.from({ length: 10 })
  }, [])

  return (
    <Container maxWidth="md" sx={{ paddingBottom: 12 }}>
      <Grid container sx={{ mt: 4 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 8, lg: 8 }}>
        {categories.map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={`category-list-item-${index}`}>
            <CategoryListItem id={index} />
          </Grid>
        ))}
        <CategoryListAddButton />
      </Grid>
    </Container>
  )
}

export default CategoryList;