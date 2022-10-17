import { DialogContentText } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Show from '../Show';
import useConfirm from './use-confirm';

export type ConfirmProps = Omit<DialogProps, 'open | onClose'> & {
  message?: string;
  open: boolean;
}

const Confirm = (props: ConfirmProps): JSX.Element => {
  const {
    message,
    open = false,
    children
  } = props;

  const { confirm, decline } = useConfirm()
  return (
    <Dialog
      open={open}
      onClose={decline}
      aria-labelledby="confirm-dialog"
    >
      <DialogTitle id="confirm-dialog">Confirm</DialogTitle>
      <Show when={message}>
        <DialogContentText>{message}</DialogContentText>
      </Show>
      <Show when={children}>
        <DialogContent>{children}</DialogContent>
      </Show>
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

export default Confirm;