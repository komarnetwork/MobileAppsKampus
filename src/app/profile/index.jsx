import { router } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const IndexPage = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-2xl font-semibold text-green-500'>Profile</Text>

      <View className='w-full p-5 items-center justify-center'>
        <Pressable
          onPress={() => router.push('/profile/about')}
          className='bg-green-600 shadow shadow-slate-400 rounded-xl p-3 w-full mt-4'
        >
          <Text className='text-white text-center'>About</Text>
        </Pressable>
        <Pressable
          onPress={() => router.push('/profile/setting')}
          className='bg-green-600 shadow shadow-slate-400 rounded-xl p-3 w-full mt-4'
        >
          <Text className='text-white text-center'>Setting</Text>
        </Pressable>
        <Pressable
          onPress={() => router.push('/profile/profile')}
          className='bg-green-600 shadow shadow-slate-400 rounded-xl p-3 w-full mt-4'
        >
          <Text className='text-white text-center'>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default IndexPage;
