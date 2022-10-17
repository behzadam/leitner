import { DialogContentText } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Show from '../Show';
import { useConfirmContext } from './confirm.provider';
import useConfirm from './use-confirm';

const Confirm = (): JSX.Element => {
  const { confirm, decline } = useConfirm()
  const { isOpened, options } = useConfirmContext();

  return (
    <Dialog
      open={isOpened}
      onClose={decline}
      aria-labelledby="confirm-dialog"
    >
      <Show when={options.title}>
        <DialogTitle id="confirm-dialog">{options.title}</DialogTitle>
      </Show>
      <Show when={options.message}>
        <DialogContentText>{options.message}</DialogContentText>
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