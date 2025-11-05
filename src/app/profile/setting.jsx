import { Text, View } from 'react-native';

const Setting = () => {
  return (
    <View className='flex-1 items-center justify-center p-5'>
      <Text className='text-2xl font-semibold text-blue-500 m-5'>Settings</Text>
      <Text>Pengaturan aplikasi dapat diubah di sini.</Text>
    </View>
  );
};

export default Setting;
