import '@/global.css';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

const RootLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'green', headerTitleAlign: 'center' }}>
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
      <Tabs.Screen
        name='cart'
        options={{
          title: 'Cart',
          headerShown: false,
          popToTopOnBlur: true,
          tabBarIcon: ({ color, size }) => <Ionicons name='cart' size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          headerShown: false,
          popToTopOnBlur: true,
          tabBarIcon: ({ color, size }) => <Ionicons name='person-circle' size={size} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default RootLayout;
