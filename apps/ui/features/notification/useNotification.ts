import { useAppDispatch, useAppSelector } from '@ui/store/index';
import {
  NotificationActions,
  NotificationState,
} from './notificationSlice';

export const useNotification = () => {
  const dispatch = useAppDispatch();
  const notification: NotificationState = useAppSelector(
    (state) => state.notification
  );

  const showNotification = (notification: NotificationState) => {
    dispatch(NotificationActions.showNotification(notification));
  };

  const hideNotification = () => {
    dispatch(NotificationActions.hideNotification());
  };

  return {
    notification,
    showNotification,
    hideNotification,
  } as const;
};
