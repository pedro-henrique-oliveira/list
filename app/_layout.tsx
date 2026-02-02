import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="voltar" options={{ headerShown: true }} />
      <Stack.Screen name="voltar2" options={{ headerShown: true }} />
    </Stack>
  );
}
