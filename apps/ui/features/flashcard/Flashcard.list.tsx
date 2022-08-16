import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Paper, Stack, Button, Typography, Container, DialogContent, IconButton } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import FlashcardFormCreate from './Flashcard.form.create';
import FlashcardFormEdit from './Flashcard.form.edit';
import { createFlashcard, deleteFlashcard, updateFlashcard } from './Flashcard.slice';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import NoRows from '@ui/components/NoRows';
import { useAppDispatch } from "@ui/store/index";
import { FlashcardListItemDto } from '@shared/types';
import useFlashcardList from './hooks/useFlashcardList';
import LinearProgress from '@mui/material/LinearProgress';

const FlashcardList = () => {
  const columns: GridColDef[] = [
    {
      field: 'word',
      headerName: 'Title',
      minWidth: 100,
      flex: 1
    },
    {
      field: 'createdAt',
      headerName: 'Created',
      minWidth: 120
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 60,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <IconButton onClick={() => handleDeleteRow(Number(params.id))}>
              <DeleteIcon fontSize="small" />
            </IconButton>
            <IconButton onClick={() => handleEditRow(Number(params.id))}>
              <EditIcon fontSize="small" />
            </IconButton>
          </Box>
        );
      }
    }
  ]

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [flashcard, setFlashCard] = useState<FlashcardListItemDto>()
  const { flashcards, fetchFlashcardsStatus } = useFlashcardList();

  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const maxWidth = 'xs';

  const handleClose = () => {
    setOpen(false);
    setIsEdit(false);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDeleteRow = (id: number) => {
    dispatch(deleteFlashcard(id))
  }

  const handleEditRow = (id: number) => {
    const flashcard = flashcards.items.find(item => item.id === id)
    if (!flashcard) return;
    setFlashCard(flashcard)
    setIsEdit(true);
    setOpen(true);
  }

  const handleSubmit = (data: any) => {
    try {
      if (isEdit) {
        dispatch(updateFlashcard(data))
      } else {
        dispatch(createFlashcard(data))
      }
      handleClose()
    } catch (error) {
      setIsEdit(false)
    }
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box sx={{ height: 420, width: '100%' }}>
        <Stack direction="row" justifyContent="space-between" spacing={1} sx={{ mb: 1, width: '100%' }}>
          <Typography variant="h6" component="h6">
            Flashcards
          </Typography>
          <Button size="small" onClick={handleClickOpen} sx={{ ml: 'auto', mb: 1 }} color="primary" variant="contained">
            New
          </Button>
          <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={maxWidth}>
            <DialogTitle>{isEdit ? 'Edit' : 'New'} Flashcard</DialogTitle>
            <DialogContent>
              {
                isEdit ?
                  (<FlashcardFormEdit flashcard={flashcard} onSubmit={handleSubmit} />)
                  : (<FlashcardFormCreate onSubmit={handleSubmit} />)
              }
            </DialogContent>
          </Dialog>
        </Stack>
        <Paper elevation={1} sx={{ height: 420 }}>
          <DataGrid
            components={{
              NoRowsOverlay: NoRows,
              LoadingOverlay: LinearProgress,
            }}
            loading={fetchFlashcardsStatus === 'PENDING'}
            rows={flashcards.items}
            columns={columns}
            initialState={{
              pagination: {
                page: 1,
              },
            }}
            pageSize={5}
            rowsPerPageOptions={[flashcards.meta.itemsPerPage]}
            pagination
          />
        </Paper>
      </Box>
    </Container >
  )
}

export default FlashcardList;