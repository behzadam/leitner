import { Container, Grid } from '@mui/material';
import LayoutNested from '@ui/components/Layout/LayoutNested';
import Leitner from '@ui/features/leitner/Leitner';
import ProgressCalendar from '@ui/features/progress/ProgressCalendar';

const Index = (): JSX.Element => {

  return (
    <LayoutNested>
      <Container maxWidth="md">
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item>
            <ProgressCalendar />
          </Grid>
          <Grid item>
            <Leitner />
          </Grid>
        </Grid>
      </Container>
    </LayoutNested>
  )
};

export default Index;