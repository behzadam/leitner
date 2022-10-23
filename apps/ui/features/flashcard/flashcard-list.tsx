import { Container } from '@mui/material';

import FlashcardListDataGrid from './flashcard-list-data-grid';
import FlashcardListToolbar from './flashcard-list-toolbar';
import FlashcardListProvider from './flashcard-list.provider';

const FlashcardList = (): JSX.Element => {
  return (
    <FlashcardListProvider>
      <Container maxWidth="md" sx={{ height: 422, mt: 4 }}>
        <FlashcardListToolbar />
        <FlashcardListDataGrid />
      </Container>
    </FlashcardListProvider>
  )
}

export default FlashcardList;