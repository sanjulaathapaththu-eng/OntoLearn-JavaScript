import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { router } from 'expo-router';

export default function AnswerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Answer</Text>

      <View style={styles.card}>
        <Text style={styles.question}>
          What is a data life cycle?
        </Text>

        <Text style={styles.answer}>
          The data life cycle is the series of stages that data
          goes through from creation or collection to storage,
          processing, use, sharing, and finally disposal or deletion.
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>
          Back to Question
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
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  card: {
    marginTop: 25,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
  },

  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  answer: {
    fontSize: 16,
    lineHeight: 24,
  },

  button: {
    marginTop: 25,
    backgroundColor: '#4F46E5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});