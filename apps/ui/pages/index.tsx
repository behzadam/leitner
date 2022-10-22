import LayoutDashboard from '@ui/components/Layout/LayoutDashboard';
import CategoryList from '@ui/features/category/category-list';
import { NextPageWithLayout } from '@ui/types';
import { ReactElement } from 'react';

const Index: NextPageWithLayout = (): JSX.Element => {
  return (
    <CategoryList />
  );
}

Index.layout = function layout(page: ReactElement) {
  return (
    <LayoutDashboard>{page}</LayoutDashboard>
  )
}

export default Index;
