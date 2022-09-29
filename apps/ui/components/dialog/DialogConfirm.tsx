import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import useDialogConfirm from './useDialogConfirm';
import { useEffect } from 'react';

export type DialogConfirmProps = {
  title: string;
  children?: React.ReactNode;
}

const DialogConfirm = ({
  title = '',
  children
}: DialogConfirmProps): JSX.Element => {
  const { isOpened, confirm, decline } = useDialogConfirm();

  return (
    <Dialog
      open={isOpened}
      onClose={decline}
      aria-labelledby="confirm-dialog"
    >
      <DialogTitle id="confirm-dialog">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={decline}
        >
          No
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={confirm}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogConfirm;