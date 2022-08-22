import { Paper, Container, LinearProgress, Stack, Typography, Box, IconButton } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import useFlashcardListHistory from './hooks/useFlashcardListHistory';
import NoRows from '@ui/components/NoRows';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type Params = {
  id: number
}

const FlashcardListHistory = ({ id }: Params): JSX.Element => {
  const columns: GridColDef[] = [
    {
      field: 'word',
      headerName: 'Title',
      minWidth: 100,
      flex: 1
    },
    {
      field: 'translate',
      headerName: 'Translate',
      minWidth: 100,
      flex: 1
    },
    {
      field: 'description',
      headerName: 'Description',
      minWidth: 100,
      flex: 1
    },
    {
      field: 'createdAt',
      headerName: 'Created',
      minWidth: 120
    }
  ]
  const { flashcardHistory, status } = useFlashcardListHistory(id);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box sx={{ height: 420, width: '100%' }}>
        <Stack direction="row" justifyContent="space-between" spacing={1} sx={{ mb: 1, width: '100%' }}>
          <Stack direction="row" alignItems="center">
            <Link
              href={{
                pathname: `/`
              }}
            >
              <a>
                <IconButton>
                  <ArrowBackIcon fontSize="small" />
                </IconButton>
              </a>
            </Link>
            <Typography variant="h6" component="h6" sx={{ ml: 1 }}>
              History of changes
            </Typography>
          </Stack>
        </Stack>
        <Paper elevation={1} sx={{ height: 420 }}>
          <DataGrid
            components={{
              NoRowsOverlay: NoRows,
              LoadingOverlay: LinearProgress,
            }}
            loading={status === 'PENDING'}
            rows={flashcardHistory}
            columns={columns}
            pageSize={6}
            pagination
          />
        </Paper>
      </Box>
    </Container>
  )
}

export default FlashcardListHistory;