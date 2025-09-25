import { useState } from 'react';
import { Button, FlatList, Image, Pressable, Text, TextInput, View } from 'react-native';

export default function DaftarBuah() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const fruits = [
    { key: 'Apple' },
    { key: 'Banana' },
    { key: 'Orange' },
    { key: 'Mango' },
    { key: 'Grapes' },
    { key: 'Pineapple' },
  ];

  return (
    <View className='flex-1 items-center px-5'>
      <Text className='text-3xl font-bold underline text-blue-500 p-5'>React Native Komponen Dasar</Text>

      <Image className='w-20 h-20' source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />

      <Text className='text-center text-2xl p-5'>Halo, selamat datang di aplikasi React Native menggunakan Expo!</Text>

      <TextInput
        className='border border-blue-600 rounded-lg my-2 w-full ios:h-12 px-5 android:border-[1.5px] placeholder:text-gray-500'
        placeholder='Masukkan nama Anda'
        value={name}
        onChangeText={setName}
        underlineColorAndroid='transparent'
      />

      <Button title='Tampilkan Pesan' onPress={() => setMessage(`Hello ${name}, selamat belajar ReactNative`)} />

      {message ? <Text className='font-bold text-lg text-green-600 p-5'>{message}</Text> : null}

      <Text className='font-bold text-xl p-5'>Daftar Buah:</Text>
      <FlatList data={fruits} renderItem={({ item }) => <Text>🍎 {item.key}</Text>} keyExtractor={(item) => item.key} />

      <View>
        <Pressable
          className='bg-blue-500 rounded-xl py-3 px-10 mt-4 mb-20'
          onPress={() => alert('Tombol Custom Ditekan!')}
        >
          <Text className='text-white text-center font-bold'>Button</Text>
        </Pressable>
      </View>
    </View>
  );
}
