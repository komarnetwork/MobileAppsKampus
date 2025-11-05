import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-2xl font-semibold text-green-500'>Count : {count}</Text>

      <View className='w-full p-5'>
        <Pressable
          onPress={() => setCount(count + 1)}
          className='bg-blue-500 shadow shadow-slate-400 rounded-xl p-3 w-50 mt-4'
        >
          <Text className='text-white text-center'>Tambah</Text>
        </Pressable>
        <Pressable
          onPress={() => setCount(count - 1)}
          className='bg-blue-500 shadow shadow-slate-400 rounded-xl p-3 w-50 mt-4'
        >
          <Text className='text-white text-center'>Kurang</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CounterApp;
