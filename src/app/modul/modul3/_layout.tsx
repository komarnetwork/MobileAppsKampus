import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'List Tugas M3', headerShown: true }} />
      <Stack.Screen name='daftarBuah' options={{ title: 'Daftar Buah' }} />
      <Stack.Screen name='luasSegitiga' options={{ title: 'Luas Segitiga' }} />
    </Stack>
  );
};

export default Layout;
