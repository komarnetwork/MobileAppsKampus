import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'Cart', headerShown: true }} />
    </Stack>
  );
};

export default Layout;
