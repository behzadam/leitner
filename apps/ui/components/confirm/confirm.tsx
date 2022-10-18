import { DialogContent, DialogContentText } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Show from '../Show';

type ConfirmProps = Omit<DialogProps, 'open | onClose'> & {
  open: boolean;
  title?: string;
  message?: string;
  confirm: () => void;
  decline: () => void;
}

const Confirm = (props: ConfirmProps): JSX.Element => {

  const {
    open = false,
    title = 'Confirm',
    message = null,
    confirm,
    decline
  } = props;

  return (
    <Dialog
      open={open}
      onClose={decline}
      aria-labelledby="confirm-dialog"
    >
      <Show when={title}>
        <DialogTitle id="confirm-dialog">{title}</DialogTitle>
      </Show>
      <DialogContent>
        <Show when={message}>
          <DialogContentText>{message}</DialogContentText>
        </Show>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
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

export default Confirm;