import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'List Tugas M5', headerShown: true }} />
      <Stack.Screen name='flexDirection' options={{ title: 'Flex Direction' }} />
      <Stack.Screen name='appWallet' options={{ title: 'Link Repo App' }} />
    </Stack>
  );
};

export default Layout;
