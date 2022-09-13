import { useState } from 'react';
import Typography from '@mui/material/Typography';
import QuizList from "@ui/features/quiz/QuizList";
import Leitner from '@ui/features/leitner/Leitner';
import { Box, Container, Tab, Tabs } from '@mui/material';
import TabPanel from '@ui/components/TabPanel';
import ProgressCalendar from '@ui/features/progress/ProgressCalendar';
import LayoutNestedWithDrawer from '@ui/components/Layout/LayoutNestedWithDrawer';

const Index = (): JSX.Element => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleTabChange = (_, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  const drawer = (
    <Box>
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        variant="fullWidth"
      >
        <Tab label="Leitner" value={0} sx={{ fontSize: 12 }} />
        <Tab label="Calendar" value={1} sx={{ fontSize: 12 }} />
      </Tabs>
      <TabPanel name="quiz-sidebar-tabs" value={tabIndex} index={0}>
        <Leitner />
      </TabPanel>
      <TabPanel name="quiz-sidebar-tabs" value={tabIndex} index={1}>
        <ProgressCalendar />
      </TabPanel>
    </Box>
  );

  return (
    <LayoutNestedWithDrawer drawer={drawer}>
      <Container maxWidth='sm'>
        <Typography paragraph sx={{ fontSize: '13px' }}>Flashcards</Typography>
        <QuizList />
      </Container>
    </LayoutNestedWithDrawer>
  );
}

export default Index;