import { Stack } from 'expo-router';

// Define navigation param list
export type RootStackParamList = {
  Login: undefined;
  Home: { userEmail: string };
};

const Layout = () => {
  return (
    // <Stack>
    //   <Stack.Screen name='index' options={{ title: 'List Tugas M6', headerShown: true }} />
    //   <Stack.Screen name='loginPage' options={{ title: 'Login Page' }} />
    // </Stack>

    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#1e90ff' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name='LoginScreen' options={{ title: 'Login Page' }} />
      <Stack.Screen name='HomeScreen' options={{ title: 'List Tugas M6' }} />
    </Stack>
  );
};

export default Layout;
