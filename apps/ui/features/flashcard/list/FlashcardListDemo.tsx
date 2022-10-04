import { Container } from '@mui/material';

import FlashcardListProvider from '../provider/FlashcardListProvider';
import FlashcardListDataGrid from './FlashcardListDataGrid';
import FlashcardListToolbar from './FlashcardListToolbar';

const FlashcardListDemo = (): JSX.Element => {
  return (
    <FlashcardListProvider>
      <Container maxWidth="md" sx={{ height: 422, mt: 4 }}>
        <FlashcardListToolbar />
        <FlashcardListDataGrid />
      </Container>
    </FlashcardListProvider>
  )
}

export default FlashcardListDemo;