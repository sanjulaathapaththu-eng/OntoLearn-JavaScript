import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { router } from 'expo-router';

export default function ResourceDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Data Representation
      </Text>

      <Text style={styles.category}>
        ICT Concepts
      </Text>

      <Text style={styles.description}>
        Computers represent data using different forms such as
        binary, hexadecimal, ASCII, and Unicode.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>
          Back to Resource
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
  },

  category: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4F46E5',
  },

  description: {
    marginTop: 15,
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