import { Container } from '@mui/material';

import CategoryListDataGrid from './category-list-data-grid';
import CategoryListToolbar from './category-list-toolbar';

const CategoryList = (): JSX.Element => {
  return (
    <Container maxWidth="md" sx={{ height: 422, mt: 4 }}>
      <CategoryListToolbar />
      <CategoryListDataGrid />
    </Container>
  )
}

export default CategoryList;