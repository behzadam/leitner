import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Paper, Stack, Button, Typography, Container } from '@mui/material';

const columns: GridColDef[] = [
  {
    field: 'word',
    headerName: 'Title',
    width: 70
  }
];

const rows = [{
  id: 1,
  word: 'Word 1'
}]

const List = () => {

  const addRow = () => {
    console.log('addRow')
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box sx={{ height: 420, width: '100%' }}>
        <Stack direction="row" justifyContent="space-between" spacing={1} sx={{ mb: 1, width: '100%' }}>
          <Typography variant="h6" component="h6">
            Flashcards
          </Typography>
          <Button size="small" onClick={addRow} sx={{ ml: 'auto', mb: 1 }} color="primary" variant="contained">
            New Flashcard
          </Button>
        </Stack>
        <Paper elevation={1} sx={{ height: 420 }}>
          <DataGrid
            rows={rows}
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

export default List;