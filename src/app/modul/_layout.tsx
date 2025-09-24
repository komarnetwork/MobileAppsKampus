import { Slot, usePathname } from 'expo-router';

const Layout = () => {
  const pathname = usePathname();
  console.log(pathname);

  return <Slot />;
};

export default Layout;
