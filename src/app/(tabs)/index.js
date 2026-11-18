import {
  AppState,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { router } from 'expo-router';
import { useEffect, useState } from 'react';

export default function HomeScreen() {
  const [appState, setAppState] = useState(
    AppState.currentState
  );

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      (nextAppState) => {
        setAppState(nextAppState);
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>

      <Image
      source={require('../../../assets/AL_ICT.png')}
      style={styles.image}
      />

      <Text style={styles.title}>
        OntoLearn
      </Text>

      <Text style={styles.subtitle}>
        What do you want to learn?
      </Text>

      <Text style={styles.description}>
        A/L ICT Learning Assistant
      </Text>

      <View style={styles.statusCard}>
        <Text style={styles.statusTitle}>
          App Status
        </Text>

        <Text style={styles.statusText}>
          {appState}
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.push('/ask-question')}
      >
        <Text style={styles.buttonText}>
          Ask Your Question
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
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },

  description: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },

  statusCard: {
    marginTop: 25,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
  },

  statusTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  statusText: {
    marginTop: 5,
    fontSize: 18,
  },

  button: {
    marginTop: 30,
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

  image: {
  width: '100%',
  height: 220,
  resizeMode: 'contain',
  marginBottom: 10,
},

});