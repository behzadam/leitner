import { Container, Grid } from '@mui/material';
import LayoutNested from '@ui/components/layout/layout-nested';
import Leitner from '@ui/features/leitner/Leitner';
import ProgressCalendar from '@ui/features/progress/ProgressCalendar';
import { NextPageWithLayout } from '@ui/types';
import { ReactElement } from 'react';


const Index: NextPageWithLayout = (): JSX.Element => {
  return (
    <Container maxWidth="sm" sx={{ mx: 'auto' }}>
      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={7}>
          <ProgressCalendar />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Leitner />
        </Grid>
      </Grid>
    </Container>
  )
};

Index.layout = function layout(page: ReactElement) {
  return (
    <LayoutNested>{page}</LayoutNested>
  )
}

export default Index;