import AddIcon from '@mui/icons-material/Add';
import { Fab, FabProps, styled } from "@mui/material";
import { Fragment, useState } from 'react';
import CategoryFormCreate from './category.dialog.create';

const FabButton = styled(Fab)<FabProps>(({ theme }) => ({
  position: 'fixed',
  bottom: '16px',
  left: '50%',
  transform: 'translate(-50%, 0)'
}));

const CategoryListAddButton = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false)

  const handleAddCategory = (): void => {
    console.log("handleAddCategory");
    setOpen(true);
  }

  const onClose = (): void => {
    setOpen(false);
  }

  return (
    <Fragment>
      <CategoryFormCreate open={open} onClose={onClose} />
      <FabButton color="primary" size="medium" aria-label="add category" onClick={handleAddCategory}>
        <AddIcon />
      </FabButton>
    </Fragment>
  )
}

export default CategoryListAddButton;