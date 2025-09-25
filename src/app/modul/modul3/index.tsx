import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

const TugasScreen = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-2xl font-semibold text-green-500'>List Tugas</Text>

      <View className='w-full p-5 items-center justify-center'>
        <Pressable
          onPress={() => router.push('./modul3/daftarBuah')}
          className='bg-blue-500 shadow shadow-slate-400 rounded-xl p-3 w-50 mt-4'
        >
          <Text className='text-white text-center'>Daftar Buah</Text>
        </Pressable>
        <Pressable
          onPress={() => router.push('./modul3/luasSegitiga')}
          className='bg-blue-500 shadow shadow-slate-400 rounded-xl p-3 w-50 mt-4'
        >
          <Text className='text-white text-center'>Luas Segitiga</Text>
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

/**
 * /index
 * /modul3 (stack)
 *     /modul3/daftarBuah
 *     /modul3/luasSegitiga
 * /modul4 (stack)
 *     /modul4/profile
 *     /modul4/login
 */
