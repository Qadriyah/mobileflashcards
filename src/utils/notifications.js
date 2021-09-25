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

export const allowsNotificationsAsync = async () => {
  try {
    const settings = await Notifications.getPermissionsAsync();
    return (
      settings.granted ||
      settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
    );
  } catch (error) {
    return error;
  }
};

export const createNotification = async () => {
  try {
    let trigger = {
      hour: 18,
      minute: 30,
      repeats: true,
    };

    let notificationId = await AsyncStorage.getItem(NOTIFICATION_ID);
    if (!notificationId) {
      await Notifications.cancelAllScheduledNotificationsAsync();
      notificationId = await Notifications.scheduleNotificationAsync({
        content: {
          title: "Complete your daily quiz",
          body: "Dont forget to complete atleast one quiz for today",
        },
        trigger,
      });
      await AsyncStorage.setItem(NOTIFICATION_ID, notificationId);
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
