import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'List Tugas M9', headerShown: true }} />
    </Stack>
  );
};

export default Layout;
