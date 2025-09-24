import '@/global.css';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

const RootLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'green' }}>
      <Tabs.Screen
        name='(home)/index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name='home' size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name='modul'
        options={{
          title: 'List Modul',
          headerShown: false,
          popToTopOnBlur: true,
          tabBarIcon: ({ color, size }) => <Ionicons name='folder' size={size} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default RootLayout;
