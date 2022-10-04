import { LinearProgress } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import NoRows from '@ui/components/NoRows';
import { useMemo } from 'react';

import { useFlashcardListEventContext } from '../hooks';
import FlashcardListDemoActions from './FlashcardListDemoActions';

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


const FlashcardListDataGrid = (): JSX.Element => {
  const { setCurrentRows } = useFlashcardListEventContext();
  //#region Data Grid Columns
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
      renderCell: (params) => <FlashcardListDemoActions id={params.row.id} />
    }
  ], [])
  //#endregion

  return (
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
        setCurrentRows(newSelectionModel as number[]);
      }}
    // selectionModel={selectionModel}
    />
  )
}

export default FlashcardListDataGrid;