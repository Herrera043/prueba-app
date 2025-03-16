import PushNotification from 'react-native-push-notification';

class NotificationService {
  constructor() {
    this.configure();
  }

  configure = () => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });

    PushNotification.createChannel(
      {
        channelId: "parking-notifications",
        channelName: "Parking Notifications",
        channelDescription: "Notifications for parking status and reminders",
        playSound: true,
        soundName: "default",
        importance: 4,
        vibrate: true,
      },
      (created) => console.log(`Channel created: ${created}`)
    );
  };

  sendReservationReminder = (spotId, minutesLeft) => {
    PushNotification.localNotification({
      channelId: "parking-notifications",
      title: "Reservation Reminder",
      message: `Your reservation for spot ${spotId} will expire in ${minutesLeft} minutes`,
      playSound: true,
      priority: "high",
    });
  };

  sendSpotAvailableNotification = (spotId) => {
    PushNotification.localNotification({
      channelId: "parking-notifications",
      title: "Spot Available",
      message: `Parking spot ${spotId} is now available near you!`,
      playSound: true,
      priority: "high",
    });
  };

  sendPaymentConfirmation = (amount) => {
    PushNotification.localNotification({
      channelId: "parking-notifications",
      title: "Payment Confirmed",
      message: `Your payment of $${amount} has been processed successfully`,
      playSound: true,
      priority: "default",
    });
  };
}

export default new NotificationService();