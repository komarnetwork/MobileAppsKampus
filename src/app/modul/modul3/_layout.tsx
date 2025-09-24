import { Stack, usePathname } from 'expo-router';

const Layout = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Stack screenOptions={{ animation: pathname.startsWith('/modul') ? 'default' : 'none' }}>
      <Stack.Screen name='index' options={{ title: 'List Tugas M3', headerShown: true }} />
      <Stack.Screen name='daftarBuah' options={{ title: 'Daftar Buah' }} />
      <Stack.Screen name='luasSegitiga' options={{ title: 'Luas Segitiga' }} />
    </Stack>
  );
};

export default Layout;
