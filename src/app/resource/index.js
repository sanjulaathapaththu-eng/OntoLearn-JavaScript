import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { router } from 'expo-router';

export default function ResourceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Resource
      </Text>

      <Text style={styles.description}>
        Explore A/L ICT learning resources.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push('/resource/details')}
      >
        <Text style={styles.buttonText}>
          View Resource Details
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

  description: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },

  button: {
    marginTop: 25,
    backgroundColor: '#4F46E5',
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});