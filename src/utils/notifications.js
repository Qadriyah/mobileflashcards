import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const NOTIFICATION_ID = "NOTIFICATION_ID";

const notificationMessage = () => ({
  content: {
    title: "Complete your daily quiz",
    body: "Dont forget to complete atleast one quiz for today",
  },
  trigger: {
    hour: 10,
    minute: 0,
    repeats: true,
  },
});

export const requestPermissionsAsync = async () => {
  try {
    return await Notifications.requestPermissionsAsync({
      ios: {
        allowAlert: true,
        allowBadge: true,
        allowSound: true,
        allowAnnouncements: true,
      },
    });
  } catch (error) {
    return error;
  }
};

export const allowNotificationsAsync = async () => {
  try {
    const settings = await Notifications.getPermissionsAsync();
    return (
      settings.granted ||
      settings.ios.status === Notifications.IosAuthorizationStatus.PROVISIONAL
    );
  } catch (error) {
    return error;
  }
};

export const createNotification = async () => {
  try {
    let notificationId = await AsyncStorage.getItem(NOTIFICATION_ID);
    if (!notificationId) {
      const status = await allowNotificationsAsync();
      if (status) {
        await Notifications.cancelAllScheduledNotificationsAsync();
        notificationId = await Notifications.scheduleNotificationAsync(
          notificationMessage()
        );
        await AsyncStorage.setItem(NOTIFICATION_ID, notificationId);
      }
    }
    return notificationId;
  } catch (error) {
    return error;
  }
};

export const clearNotifications = async () => {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
    await AsyncStorage.removeItem(NOTIFICATION_ID);
  } catch (error) {
    return error;
  }
};
