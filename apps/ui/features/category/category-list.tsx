import { Container } from '@mui/material';
import { useMemo } from 'react';

import CategoryListDataGrid from './category-list-data-grid';

const CategoryList = (): JSX.Element => {
  const categories: number[] = useMemo(() => {
    return Array.from({ length: 10 })
  }, [])

  return (
    <Container maxWidth="lg" sx={{ height: 422, mt: 4 }}>
      <CategoryListDataGrid />
    </Container>
  )
}

export default CategoryList;