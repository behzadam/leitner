import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Stack, Button, Container } from '@mui/material';

const columns: GridColDef[] = [
  {
    field: 'word',
    headerName: 'Word',
    width: 70
  },
  {
    field: 'translate',
    headerName: 'Translate',
    width: 300
  },
  {
    field: 'description',
    headerName: 'Description'
  }
];

const rows = [
  { id: 1, word: 'Word 1', translate: 'Word 1', description: 'Translate 1' },
  { id: 2, word: 'Word 2', translate: 'Word 2', description: 'Translate 2' },
  { id: 3, word: 'Word 3', translate: 'Word 3', description: 'Translate 3' },
  { id: 4, word: 'Word 4', translate: 'Word 4', description: 'Translate 4' },
  { id: 5, word: 'Word 5', translate: 'Word 5', description: 'Translate 5' },
];

const List = () => {

  const addRow = () => {
    console.log('addRow')
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ height: 315, width: '100%' }}>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <Button size="small" onClick={addRow} sx={{ ml: 'auto', mb: 1 }} color="primary" variant="contained">
            Add a row
          </Button>
        </Stack>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Box>
    </Container >
  )
}

export default List;