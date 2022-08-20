import { Snackbar, Alert, SnackbarCloseReason } from "@mui/material";
import { useNotification } from "./useNotification";

const Notification = (): JSX.Element => {
  const {
    notification,
    hideNotification
  } = useNotification()

  const handleClose = (_: unknown, reason?: SnackbarCloseReason) => {
    reason !== "clickaway" && hideNotification();
  }

  return (
    <Snackbar
      open={notification.open}
      autoHideDuration={notification.timeout}
      onClose={handleClose}
      anchorOrigin={{ vertical: notification.vertical, horizontal: notification.horizontal }}
    >
      <p>
        {notification.message}
      </p>
    </Snackbar>
  );
}

export default Notification;