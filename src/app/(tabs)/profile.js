import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import * as Notifications from 'expo-notifications';

export default function ProfileScreen() {
  const sendNotification = async () => {
    const { status } =
      await Notifications.requestPermissionsAsync();

    if (status !== 'granted') {
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'OntoLearn Reminder',
        body: 'Time to continue learning A/L ICT!',
      },
      trigger: null,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <Text style={styles.subtitle}>
        A/L ICT Learning Assistant
      </Text>

      <Pressable
        style={styles.button}
        onPress={sendNotification}
      >
        <Text style={styles.buttonText}>
          Send Learning Reminder
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  subtitle: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },

  button: {
    marginTop: 30,
    backgroundColor: '#4F46E5',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});