import { Container, LinearProgress, Stack, Button, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import NoRows from '@ui/components/NoRows';
import { useMemo, useState, useEffect } from 'react';
import FlashcardListDemoActions from './FlashcardListDemoActions';
import FlashcardFormEdit from './FlashcardEditDialog';
import DeleteIcon from '@mui/icons-material/Delete';
import DialogConfirm from '@ui/components/dialog/DialogConfirm';
import Link from 'next/link';
import FlashcardCreateDialog from './FlashcardCreateDialog';
import FlashcardEditDialog from './FlashcardEditDialog';
import Show from '@ui/components/Show';

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

const CreateFlashcard = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button size="small" onClick={() => setOpen(true)} color="primary" variant="contained" disableElevation>
        New
      </Button>
      <FlashcardCreateDialog open={open} onClose={() => setOpen(false)} />
    </>
  )
}

const EditFlashcard = ({
  currentRowId,
  setCurrentRowId
}: {
  currentRowId?: number,
  setCurrentRowId: (id?: number) => void
}): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!currentRowId) return setOpen(false);
    setOpen(true);
  }, [currentRowId])

  const onClose = (): void => {
    setCurrentRowId(null)
    setOpen(false)
  }

  return (
    <Show when={open}>
      <FlashcardEditDialog id={currentRowId} open={open} onClose={onClose} />
    </Show>
  )
}

const FlashcardListDemoToolbar = (): JSX.Element => {
  return (
    <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
      <Typography variant="h6" >
        Flashcards
      </Typography>
      {/* <IconButton aria-label="delete" sx={{ ml: 1 }} onClick={handleOpenDialogConfirm(true)} size="small" color="error" disabled={disableDeleteButton}>
        <DeleteIcon />
      </IconButton> */}
      <Stack direction="row" alignItems="center" spacing={1} sx={{ ml: 'auto' }}>
        <Link href="/quiz">
          <Button size="small" color="secondary" variant="contained" disableElevation>Quiz</Button>
        </Link>
        <CreateFlashcard />
      </Stack>
    </Stack>
  )
}

const FlashcardListDemo = (): JSX.Element => {
  const [currentRowId, setCurrentRowId] = useState<number | null>(null);
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
      renderCell: (params) => <FlashcardListDemoActions setCurrentRowId={setCurrentRowId} currentRowId={params.row.id} />
    }
  ], [])


  // useEffect(() => {
  //   if (selectionModel.length > 0) {
  //     setDisableDeleteButton(false)
  //     return;
  //   }
  //   setDisableDeleteButton(true)
  // }, [selectionModel])

  // const handleDeleteRow = (confirmed: boolean): void => {
  //   console.log('handleDeleteRow', confirmed)
  // }

  return (
    <Container maxWidth="md" sx={{ height: 422, mt: 4 }}>
      <FlashcardListDemoToolbar />
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
      <EditFlashcard
        currentRowId={currentRowId}
        setCurrentRowId={setCurrentRowId}
      />
      {/* <DialogConfirm open={openConfirmDialog} onConfirm={handleDeleteRow}>
          <Typography>Are you sure you want to delete?</Typography>
        </DialogConfirm> */}
    </Container>
  )
}

export default FlashcardListDemo;