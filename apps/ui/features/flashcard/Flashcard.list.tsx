import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Paper, Stack, Button, Typography, Container, DialogContent, IconButton } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import FlashcardForm from './Flashcard.form.edit';
import { useAppDispatch } from "@/store/index";
import { createFlashcard, deleteFlashcard } from './Flashcard.slice';
import DeleteIcon from '@mui/icons-material/Delete';
import NoRows from '@/components/NoRows';


type Props = {
  // should replace with shared DTO
  items: any[]
}


const FlashcardList = ({ items }: Props) => {
  const columns: GridColDef[] = [
    {
      field: 'word',
      headerName: 'Title',
      minWidth: 100,
      flex: 1
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
            <IconButton onClick={() => handleDeleteRow(params.id)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        );
      }
    }
  ]

  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const maxWidth = 'xs';

  const handleClose = () => {
    setOpen(false);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDeleteRow = (id: number) => {
    dispatch(deleteFlashcard(id))
  }

  const onSubmit = (data: any) => {
    try {
      dispatch(createFlashcard(data))
      handleClose()
      // eslint-disable-next-line no-empty
    } catch (error) {

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
            New Flashcard
          </Button>
          <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={maxWidth}>
            <DialogTitle>Flashcard Form</DialogTitle>
            <DialogContent>
              <FlashcardForm onSubmit={onSubmit} />
            </DialogContent>
          </Dialog>
        </Stack>
        <Paper elevation={1} sx={{ height: 420 }}>
          <DataGrid
            components={{
              NoRowsOverlay: NoRows,
            }}
            rows={items}
            columns={columns}
            pageSize={6}
            rowsPerPageOptions={[6]}
          />
        </Paper>
      </Box>
    </Container >
  )
}

export default FlashcardList;