import { router } from 'expo-router';
import { Linking, Pressable, Text, View } from 'react-native';

const TugasScreen = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-2xl font-semibold text-green-500'>List Tugas</Text>

      <View className='w-full p-5 items-center justify-center'>
        <Pressable
          onPress={() => router.push('./modul5/collApp')}
          className='bg-blue-500 shadow shadow-slate-400 rounded-xl p-3 w-50 mt-4'
        >
          <Text className='text-white text-center'>Coll App</Text>
        </Pressable>

        <Pressable
          onPress={() =>
            Linking.openURL(
              'https://github.com/komarnetwork/mobileWallet/commit/87a890e4afddfb637419d105f0409832606b7efe'
            )
          }
          className='bg-blue-500 shadow shadow-slate-400 rounded-xl p-3 w-50 mt-4'
        >
          <Text className='text-white text-center'>App Wallet</Text>
        </Pressable>
      </View>

      <View className='w-full p-5'>
        <Pressable
          onPress={() => router.push('../modul')}
          className='bg-green-600 shadow shadow-slate-400 rounded-xl p-3 w-full mt-4'
        >
          <Text className='text-white text-center'>Back to Modul</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TugasScreen;
