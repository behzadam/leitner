import { Container } from '@mui/material';

import CategoryListDataGrid from './category-list-data-grid';

const CategoryList = (): JSX.Element => {
  return (
    <Container maxWidth="lg" sx={{ height: 422, mt: 4 }}>
      <CategoryListDataGrid />
    </Container>
  )
}

export default CategoryList;