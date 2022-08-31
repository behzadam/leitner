import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Paper, Stack, Button, Typography, Container, DialogContent, IconButton } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import FlashcardFormCreate from './Flashcard.form.create';
import FlashcardFormEdit from './Flashcard.form.edit';
import { createFlashcard, updateFlashcard } from './flashcardSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import NoRows from '@ui/components/NoRows';
import { useAppDispatch } from "@ui/store/index";
import { FlashcardListItemDto } from '@shared/types';
import useFlashcardList from './hooks/useFlashcardList';
import LinearProgress from '@mui/material/LinearProgress';
import { useNotification } from '@ui/features/notification/useNotification';
import Link from 'next/link';
import ConfirmDialog from '@ui/components/ConfirmDialog';

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
      minWidth: 120,
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
            <Link
              href={{
                pathname: `/detail/[id]`,
                query: { id: params.id }
              }}
            >
              <a>
                <IconButton>
                  <InfoIcon fontSize="small" />
                </IconButton>
              </a>
            </Link>
          </Box>
        );
      }
    }
  ]

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [flashcard, setFlashCard] = useState<FlashcardListItemDto>();
  const { flashcards, onDeleteItem, status } = useFlashcardList();
  const { showNotification } = useNotification();

  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const [currentItem, setCurrentItem] = useState<number | null>(null);

  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const maxWidth = 'xs';

  const handleClose = () => {
    setOpen(false);
    setIsEdit(false);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDeleteRow = (id: number) => {
    setOpenDeleteConfirm(true)
    setCurrentItem(id)
  }

  const onConfirmDelete = async (confirmed: boolean) => {
    if (confirmed) {
      await onDeleteItem(currentItem)
    }
    setOpenDeleteConfirm(false)
    setCurrentItem(null)
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
        dispatch(updateFlashcard(data));
        showNotification({ message: 'Flashcard updated successfully.' });
      } else {
        dispatch(createFlashcard(data));
        showNotification({ message: 'Flashcard created successfully.' });
      }
      handleClose();
    } catch (error) {
      setIsEdit(false);
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
            loading={status === 'PENDING'}
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

          <ConfirmDialog
            title="Delete Flashcard?"
            open={openDeleteConfirm}
            onConfirm={(value) => onConfirmDelete(value)}
          >
            Are you sure you want to delete this record?
          </ConfirmDialog>
        </Paper>
      </Box>
    </Container >
  )
}

export default FlashcardList;