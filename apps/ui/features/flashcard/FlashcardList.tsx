import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Paper, Stack, Button, Typography, Container } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';

const columns: GridColDef[] = [
  {
    field: 'word',
    headerName: 'Title',
    width: 70
  }
];

type Props = {
  items: any[]
}

const Toolbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    console.log('Log')
    setOpen(false);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Stack direction="row" justifyContent="space-between" spacing={1} sx={{ mb: 1, width: '100%' }}>
      <Typography variant="h6" component="h6">
        Flashcards
      </Typography>
      <Button size="small" onClick={handleClickOpen} sx={{ ml: 'auto', mb: 1 }} color="primary" variant="contained">
        New Flashcard
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Flashcard Form</DialogTitle>
      </Dialog>
    </Stack>
  )
}

const FlashcardList = ({ items }: Props) => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box sx={{ height: 420, width: '100%' }}>
        <Toolbar />
        <Paper elevation={1} sx={{ height: 420 }}>
          <DataGrid
            rows={items}
            columns={columns}
            pageSize={6}
            rowsPerPageOptions={[6]}
            checkboxSelection
          />
        </Paper>
      </Box>
    </Container >
  )
}

export default FlashcardList;