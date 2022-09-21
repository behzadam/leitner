import { Container, LinearProgress, Stack, Button, IconButton, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import NoRows from '@ui/components/NoRows';
import FlashcardCategoriesSelect from './FlashcardCategoriesSelect';
import { useMemo, useState, useEffect } from 'react';
import FlashcardListDemoActions from './FlashcardListDemoActions';
import FlashcardListDemoDialog from './FlashcardListDemoDialog';
import DeleteIcon from '@mui/icons-material/Delete';
import DialogConfirm from '@ui/components/dialog/DialogConfirm';

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
  const [openFormDialog, setOpenFormDialog] = useState<boolean>(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState<boolean>(false);
  const [disableDeleteButton, setDisableDeleteButton] = useState<boolean>(true);
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
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

  useEffect(() => {
    if (selectionModel.length > 0) {
      setDisableDeleteButton(false)
      return;
    }
    setDisableDeleteButton(true)
  }, [selectionModel])

  const handleOpenDialog = (): void => {
    setOpenFormDialog(open => !open)
  }

  const handleDeleteRow = (confirmed: boolean): void => {
    console.log('handleDeleteRow', confirmed)
    setOpenConfirmDialog(false)
  }

  const handleShowConfirmDialog = (): void => {
    console.log('handleShowConfirmDialog')
    setOpenConfirmDialog(true)
  }

  return (
    <Container maxWidth="md" sx={{ height: 422, mt: 4 }}>
      <Stack direction="row" alignItems="center">
        <FlashcardCategoriesSelect sx={{ mb: 1, py: 0, minWidth: 130 }} size="small" />
        <IconButton aria-label="delete" sx={{ ml: 1 }} onClick={handleShowConfirmDialog} size="small" color="error" disabled={disableDeleteButton}>
          <DeleteIcon />
        </IconButton>
        <Button size="small" onClick={handleOpenDialog} sx={{ ml: 'auto' }} color="primary" variant="contained" disableElevation>
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
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionModel}
      />
      <FlashcardListDemoDialog
        id={rowId}
        setRowId={setRowId}
        openDialog={openFormDialog}
        setOpenDialog={setOpenFormDialog}
      />
      <DialogConfirm open={openConfirmDialog} onConfirm={handleDeleteRow}>
        <Typography>Are you sure you want to delete?</Typography>
      </DialogConfirm>
    </Container>
  )
}

export default FlashcardListDemo;