import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';

export type DialogConfirmProps = {
  title?: string;
  open: boolean;
  onConfirm: (value: boolean) => void;
  children: React.ReactNode;
}

const DialogConfirm = ({
  title = 'Confirm',
  children,
  open = false,
  onConfirm }: DialogConfirmProps
): JSX.Element => {
  return (
    <Dialog
      open={open}
      onClose={() => onConfirm(false)}
      aria-labelledby="confirm-dialog"
    >
      <DialogTitle id="confirm-dialog">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={() => onConfirm(false)}
        >
          No
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            onConfirm(true);
          }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogConfirm;