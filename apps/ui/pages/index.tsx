import CategoryList from '@ui/features/category/CategoryList';
import { NextPageWithLayout } from '@ui/types';

const Index: NextPageWithLayout = (): JSX.Element => {
  return (
    <CategoryList />
  );
}

Index.layout = 'dashboard'
export default Index;
