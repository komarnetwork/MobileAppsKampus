import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

const IndexModul = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-xl font-semibold text-green-500'>List-List Tugas Modul</Text>
      <Pressable
        onPress={() => router.push('../modul/modul3')}
        className='bg-blue-500 shadow shadow-slate-400 rounded-xl p-3 w-50 mt-4'
      >
        <Text className='text-white text-center'>Modul 3</Text>
      </Pressable>
      <Pressable
        onPress={() => router.push('../modul/modul4')}
        className='bg-blue-500 shadow shadow-slate-400 rounded-xl p-3 w-50 mt-4'
      >
        <Text className='text-white text-center'>Modul 4</Text>
      </Pressable>
    </View>
  );
};

export default IndexModul;
