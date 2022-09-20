import { Container, LinearProgress, Stack, Typography, Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import NoRows from '@ui/components/NoRows';
import FlashcardCategoriesSelect from './FlashcardCategoriesSelect';
import { useMemo, useState, useEffect } from 'react';
import FlashcardListDemoActions from './FlashcardListDemoActions';
import FlashcardListDemoDialog from './FlashcardListDemoDialog';

const rows = [
  { id: 1, front: 'Front 1', back: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.' },
  { id: 2, front: 'Front 2', back: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.' },
  { id: 3, front: 'Front 3', back: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.' },
  { id: 4, front: 'Front 4', back: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.' },
  { id: 5, front: 'Front 5', back: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.' },
  { id: 6, front: 'Front 6', back: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.' },
  { id: 7, front: 'Front 7', back: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.' },
  { id: 8, front: 'Front 8', back: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.' },
  { id: 9, front: 'Front 9', back: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.' },
];

const FlashcardListDemo = (): JSX.Element => {
  const [rowId, setRowId] = useState<number | null>(null);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const columns: GridColDef[] = useMemo(() => [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'front',
      headerName: 'Front',
      width: 150
    },
    {
      field: 'back',
      headerName: 'Back',
      flex: 1
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 120,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => <FlashcardListDemoActions id={params.row.id} setRowId={setRowId} />
    }
  ], [])

  useEffect(() => {
    console.log('rowId', rowId)
  }, [rowId])

  const handleOpenDialog = (): void => {
    setOpenDialog(open => !open)
  }

  return (
    <Container maxWidth="md" sx={{ height: 422, mt: 4 }}>
      <Stack direction="row" justifyContent="space-between" spacing={1} sx={{ mb: 1, width: '100%' }}>
        <FlashcardCategoriesSelect />
        <Button size="small" onClick={handleOpenDialog} sx={{ ml: 'auto', mb: 1 }} color="primary" variant="contained">
          New
        </Button>
      </Stack>
      <DataGrid
        components={{
          NoRowsOverlay: NoRows,
          LoadingOverlay: LinearProgress,
        }}
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        sx={{ backgroundColor: "white" }}
      />
      <FlashcardListDemoDialog
        id={rowId}
        setRowId={setRowId}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
    </Container>
  )
}

export default FlashcardListDemo;