import AddIcon from '@mui/icons-material/Add';
import { Fab, FabProps, styled } from "@mui/material";
import { useDialogEvent } from '@ui/components/dialog/dialog.provider';
import { Fragment } from 'react';
import CategoryFormCreate from './category-create';

const FabButton = styled(Fab)<FabProps>(({ theme }) => ({
  position: 'fixed',
  bottom: '16px',
  left: '50%',
  transform: 'translate(-50%, 0)'
}));

const CategoryListAddButton = (): JSX.Element => {
  const { onOpenDialog } = useDialogEvent();
  return (
    <Fragment>
      <FabButton
        color="primary"
        size="medium"
        aria-label="add category"
        onClick={() => onOpenDialog({
          content: <CategoryFormCreate />
        })}>
        <AddIcon />
      </FabButton>
    </Fragment>
  )
}

export default CategoryListAddButton;