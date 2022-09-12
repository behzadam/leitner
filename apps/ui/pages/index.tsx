import DashboardLayout from '@ui/components/Layout/LayoutDashboard';
import FlashcardListDemo from '@ui/features/flashcard/FlashcardListDemo'
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const Index: NextPageWithLayout = (): JSX.Element => {
  return (
    <FlashcardListDemo />
  );
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Index;
