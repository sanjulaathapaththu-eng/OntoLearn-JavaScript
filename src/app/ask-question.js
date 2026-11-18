import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import { router } from 'expo-router';
import { useState } from 'react';

export default function AskQuestionScreen() {
  const [question, setQuestion] = useState('');

  const handleAsk = () => {
    if (question.trim()) {
      router.push('/answer');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ask Your Question</Text>

      <Text style={styles.subtitle}>
        Ask anything about A/L ICT.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. What is a data life cycle?"
        value={question}
        onChangeText={setQuestion}
        multiline
      />

      <Pressable
        style={styles.button}
        onPress={handleAsk}
      >
        <Text style={styles.buttonText}>
          Get Answer
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

  subtitle: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },

  input: {
    marginTop: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    minHeight: 100,
    textAlignVertical: 'top',
  },

  button: {
    marginTop: 20,
    backgroundColor: '#4F46E5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});