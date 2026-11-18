import { Stack } from 'expo-router';

export default function ResourceLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Resource',
        }}
      />

      <Stack.Screen
        name="details"
        options={{
          title: 'Resource Details',
        }}
      />
    </Stack>
  );
}