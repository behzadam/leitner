import { Container, Grid } from '@mui/material';
import LayoutNested from '@ui/components/Layout/LayoutNested';
import Leitner from '@ui/features/leitner/Leitner';
import ProgressCalendar from '@ui/features/progress/ProgressCalendar';

const Index = (): JSX.Element => {

  return (
    <LayoutNested>
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
    </LayoutNested>
  )
};

export default Index;