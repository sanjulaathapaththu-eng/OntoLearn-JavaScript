import { Stack } from 'expo-router';
import { SavedProvider } from '../context/SavedContext';

export default function RootLayout() {
  return (
    <SavedProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ask-question"
          options={{
            title: 'Ask Question',
          }}
        />

        <Stack.Screen
          name="answer"
          options={{
            title: 'Answer',
          }}
        />
      </Stack>
    </SavedProvider>
  );
}