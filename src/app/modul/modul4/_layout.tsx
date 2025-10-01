import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'List Tugas M4', headerShown: true }} />
      <Stack.Screen name='flexDirection' options={{ title: 'Flex Direction' }} />
    </Stack>
  );
};

export default Layout;
