import { useState } from 'react';
import { Button, FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
    <ScrollView>
      <View className='flex-1 items-center justify-center px-5'>
        <Text className='text-3xl font-bold underline text-blue-500 p-5'>React Native Komponen Dasar</Text>

        <Image className='w-20 h-20' source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />

        <Text className='text-center text-2xl p-5'>
          Halo, selamat datang di aplikasi React Native menggunakan Expo!
        </Text>

        <TextInput
          className='border border-blue-600 rounded-xl my-2 w-80 m-5'
          placeholder='Masukkan nama Anda'
          value={name}
          onChangeText={setName}
        />

        <Button title='Tampilkan Pesan' onPress={() => setMessage(`Hello ${name}, selamat belajar ReactNative`)} />

        {message ? <Text className='font-bold text-lg text-green-600 p-5'>{message}</Text> : null}

        <Text className='font-bold text-xl p-5'>Daftar Buah:</Text>
        <FlatList data={fruits} renderItem={({ item }) => <Text>🍎 {item.key}</Text>} />

        <TouchableOpacity
          className='bg-green-700 py-3 px-6 mt-5 rounded-lg items-center justify-center'
          onPress={() => alert('Tombok Custom ditekan!')}
        >
          <Text className='text-white text-base font-bold'>Button</Text>
        </TouchableOpacity>

        {/* <Link href='/modul3/luasSegitiga' push asChild>
          <Text className='text-2xl font-semibold text-blue-500 mt-5'>Push to Luas Segitiga</Text>
        </Link> */}
      </View>
    </ScrollView>
  );
}
