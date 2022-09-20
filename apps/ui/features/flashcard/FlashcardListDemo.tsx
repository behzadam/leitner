import { Box, Container, IconButton, LinearProgress } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import InfoIcon from '@mui/icons-material/Info';
import NoRows from '@ui/components/NoRows';
import Link from 'next/link';
import FlashcardCategoriesSelect from './FlashcardCategoriesSelect';
import { useMemo } from 'react';

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
      renderCell: (params) => {
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
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
  ], [])

  return (
    <Container maxWidth="md" sx={{ height: 422, mt: 4 }}>
      <FlashcardCategoriesSelect />
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
    </Container>
  )
}

export default FlashcardListDemo;