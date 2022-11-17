import { LinearProgress } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import PlaceholderNoRow from '@ui/components/placeholder/placeholder-no-row';
import { useMemo, useState } from 'react';
import CategoryListActions from './category-list-actions';

const rows = [
  { id: 1, name: 'Name 1' },
  { id: 2, name: 'Name 2' },
  { id: 3, name: 'Name 3' },
  { id: 4, name: 'Name 4' },
  { id: 5, name: 'Name 5' },
  { id: 6, name: 'Name 6' },
  { id: 7, name: 'Name 7' },
  { id: 8, name: 'Name 8' },
  { id: 9, name: 'Name 9' },
];

const CategoryListDataGrid = (): JSX.Element => {

  const [currentRows, setCurrentRows] = useState<number[]>();

  //#region Data Grid Columns
  const columns: GridColDef[] = useMemo(() => [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'name',
      headerName: 'Flashcard',
      width: 150
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 80,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => <CategoryListActions id={params.row.id} />
    }
  ], [])
  //#endregion

  return (
    <DataGrid
      components={{
        NoRowsOverlay: PlaceholderNoRow,
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
    />
  )
}

export default CategoryListDataGrid;